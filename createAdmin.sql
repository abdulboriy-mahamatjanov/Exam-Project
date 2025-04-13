-- Active: 1740380082978@@127.0.0.1@5432@postgres
CREATE TYPE UserRole as ENUM ('ADMIN');

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    fullName VARCHAR(255) NOT NULL,
    phone VARCHAR(13) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role UserRole NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT  'ACTIVE',
    avatar VARCHAR(255) NOT NULL,
    dataCompanyId UUID,
    contactsId UUID
)

INSERT INTO Users (fullName, phone, password, role, status, avatar, dataCompanyId, contactsId) VALUES
('Abdulboriy Mahamatjanov', '+998507525150', 'Admin12345', 'ADMIN', 'ACTIVE', '', '', '')