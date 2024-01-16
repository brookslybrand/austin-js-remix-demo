CREATE TABLE events (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    location VARCHAR(255) NOT NULL,
    sponsor_id INT,
    FOREIGN KEY (sponsor_id) REFERENCES sponsors(id)
);

CREATE TABLE speakers (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    bio TEXT,
    profile_src VARCHAR(255),
    event_id INT,
    FOREIGN KEY (event_id) REFERENCES events(id)
);

CREATE TABLE sponsors (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);