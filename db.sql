


CREATE TABLE `Cards` (
	`ID` INT NOT NULL AUTO_INCREMENT,
	`CardName` TEXT NOT NULL,
	`CardPrice` INT NOT NULL,
	`CardImage` INT NOT NULL,
	PRIMARY KEY(`ID`)
);

CREATE TABLE `Users` (
    `DiscordID` BIGINT NOT NULL,
    `Watermelon` INT NOT NULL,
    `Level` INT NOT NULL,
    `Exp` INT NOT NULL,
    `Hugs` INT NOT NULL,
    PRIMARY KEY(`DiscordID`)
);

CREATE TABLE `UserCards`(
	`OwnerID` BIGINT NOT NULL,
	`CardName` TEXT NOT NULL,
	`Grade` INT NOT NULL,
	`UniqueID` INT NOT NULL,
	PRIMARY KEY(`UniqueID`)
);