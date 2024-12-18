import React, { Fragment } from "react";

const Games = ({ progress }) => {
    const logoColor = "2e2e2e/808080";

    return (
        <div
            className="flex gap-10 w-max py-4 bg-gray-50"
            style={{ transform: `translate(${progress * -1000}px)` }}>
            {[...Array(3)].map((_, index) => (
                <Fragment key={index}>
                    <img
                        width="96"
                        height="96"
                        src={`https://img.icons8.com/nolan/96/${logoColor}/half-life-1--v2.png`}
                        alt="half-life"
                    />
                    <img
                        width="96"
                        height="96"
                        src={`https://img.icons8.com/nolan/96/${logoColor}/celeste.png`}
                        alt="celeste"
                    />
                    <img
                        width="96"
                        height="96"
                        src={`https://img.icons8.com/nolan/96/${logoColor}/portal-1.png`}
                        alt="portal"
                    />
                    <img
                        width="96"
                        height="96"
                        src={`https://img.icons8.com/nolan/96/${logoColor}/minecraft-creeper.png`}
                        alt="minecraft"
                    />
                    <img
                        width="96"
                        height="96"
                        src={`https://img.icons8.com/nolan/96/${logoColor}/dead-cells.png`}
                        alt="dead-cells"
                    />
                    <img
                        width="96"
                        height="96"
                        src={`https://img.icons8.com/nolan/96/${logoColor}/trackmania--v2.png`}
                        alt="trackmania"
                    />
                    <img
                        width="96"
                        height="96"
                        src={`https://img.icons8.com/nolan/96/${logoColor}/steve-jumping-dino.png`}
                        alt="steve-jumping-dino"
                    />
                    <img
                        width="96"
                        height="96"
                        src={`https://img.icons8.com/nolan/96/${logoColor}/triforce.png`}
                        alt="triforce"
                    />
                </Fragment>
            ))}
        </div>
    );
};

export default Games;
