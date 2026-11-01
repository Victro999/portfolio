import puppeteer from "puppeteer";

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    const language = searchParams.get("lang") || "en";

    const supportedLanguages = ["en", "fr"];
    const selectedLanguage = supportedLanguages.includes(language)
        ? language
        : "en";

    const browser = await puppeteer.launch({
        headless: true,
    });

    try {
        const page = await browser.newPage();

        // await page.waitForFunction(
        //     (lang) => {
        //         return (
        //             document
        //                 .querySelector(".resume-export")
        //                 ?.getAttribute("data-language") === lang
        //         );
        //     },
        //     {},
        //     selectedLanguage,
        // );

        await page.goto(
            `http://localhost:3000/resume?lang=${selectedLanguage}`,
            { waitUntil: "networkidle0" },
        );

        await page.emulateMediaType("print");

        await page.evaluate(async () => {
            await document.fonts.ready;
        });

        const pdf = await page.pdf({
            format: "Letter",
            printBackground: true,
            preferCSSPageSize: true,
        });

        return new Response(pdf, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'inline; filename="resume.pdf"',
            },
        });
    } finally {
        await browser.close();
    }
}
