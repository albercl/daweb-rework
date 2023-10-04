-- CreateTable
CREATE TABLE `City` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `City_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TouristAttraction` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `lat` DOUBLE NULL,
    `lon` DOUBLE NULL,
    `rating` DOUBLE NOT NULL DEFAULT 0,
    `wikipediaUrl` VARCHAR(300) NOT NULL,
    `imageUrl` VARCHAR(300) NOT NULL,
    `description` VARCHAR(1000) NOT NULL,
    `cityId` INTEGER NOT NULL,

    UNIQUE INDEX `TouristAttraction_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TouristAttraction` ADD CONSTRAINT `TouristAttraction_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
