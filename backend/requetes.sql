-- Utilisateurs (id_uti, nom, prenom, mdp, num_tel, photo, email, est_certifie, certificat, genre, total_rating, num_ratings);
-- Voitures (matricule, #id_prop, modele, couleur, voiture_est_certifie, voiture_certificat) ;
-- Trajets (id_trajet, depart, arrivee, timestamp, nbr_place, prix, #id_conducteur, #id_voiture, detailst:JSON);
-- Reservations (#id_trajet, #id_reserveur, nbr_place) ;
-- Signalements (#id_sign, #id_uti, description:JSON);
-- Details (#id_trajet, details_text:JSON)



-- Create Users table
CREATE TABLE Utilisateurs (
    id_uti INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    mdp VARCHAR(100),
    num_tel VARCHAR(20),
    photo VARCHAR(100),
    email VARCHAR(100),
    est_certifie BOOLEAN,
    certificat VARCHAR(100),
    genre VARCHAR(10)
);

-- Create Cars table
CREATE TABLE Voitures (
    matricule VARCHAR(20) PRIMARY KEY,
    id_prop INT,
    modele VARCHAR(50),
    couleur VARCHAR(20),
    voiture_est_certifie BOOLEAN,
    voiture_certificat VARCHAR(100),
    FOREIGN KEY (id_prop) REFERENCES Utilisateurs(id_uti)
);

-- Create Trips table
CREATE TABLE Trajets (
    id_trajet INT AUTO_INCREMENT PRIMARY KEY,
    depart VARCHAR(100),
    arrivee VARCHAR(100),
    timestamp TIMESTAMP,
    nbr_place INT,
    prix DECIMAL(10, 2),
    id_conducteur INT,
    id_voiture VARCHAR(20),
    FOREIGN KEY (id_conducteur) REFERENCES Utilisateurs(id_uti),
    FOREIGN KEY (id_voiture) REFERENCES Voitures(matricule)
);

-- Create Reservations table
CREATE TABLE Reservations (
    id_reservation INT AUTO_INCREMENT PRIMARY KEY,
    id_trajet INT,
    id_reserveur INT,
    nbr_place INT,
    FOREIGN KEY (id_trajet) REFERENCES Trajets(id_trajet),
    FOREIGN KEY (id_reserveur) REFERENCES Utilisateurs(id_uti)
);

-- Create Reports table
CREATE TABLE Signalements (
    id_sign INT AUTO_INCREMENT PRIMARY KEY,
    id_uti INT,
    id_trajet INT,
    description TEXT,
    FOREIGN KEY (id_uti) REFERENCES Utilisateurs(id_uti),
    FOREIGN KEY (id_trajet) REFERENCES Trajets(id_trajet)
);

ALTER TABLE utilisateurs
ADD CONSTRAINT unique_email UNIQUE (email),
ADD CONSTRAINT unique_num_tel UNIQUE (num_tel);

ALTER TABLE voitures
ADD CONSTRAINT unique_matricule UNIQUE (matricule);

ALTER TABLE utilisateurs
ADD COLUMN total_rating INT DEFAULT 0,
ADD COLUMN num_ratings INT DEFAULT 0;


ALTER TABLE utilisateurs
MODIFY COLUMN total_rating FLOAT(4,1) DEFAULT 2.5;

ALTER TABLE utilisateurs MODIFY photo MEDIUMBLOB;


ALTER TABLE trajets
ADD details JSON;

drop table Signalements

CREATE TABLE Signalements(
    SignalerUserID INT,
    TargetUserID INT,
    Description JSON,
    FOREIGN KEY (SignalerUserID) REFERENCES Utilisateurs(id_uti),
    FOREIGN KEY (TargetUserID) REFERENCES Utilisateurs(id_uti)
);



--OR-------OR--------OR---------OR---------OR---------OR--------OR----------OR----------OR---------OR--------OR----------OR--------OR---------OR
-- from the beggining:


-- Create Users table
CREATE TABLE Utilisateurs (
    id_uti INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    mdp VARCHAR(100),
    num_tel VARCHAR(20),
    photo MEDIUMBLOB,
    email VARCHAR(100),
    est_certifie BOOLEAN,
    certificat VARCHAR(100),
    genre VARCHAR(10),
    total_rating FLOAT(4,1) DEFAULT 2.5,
    num_ratings INT DEFAULT 0,
    CONSTRAINT unique_email UNIQUE (email),
    CONSTRAINT unique_num_tel UNIQUE (num_tel)
);

-- Create Cars table
CREATE TABLE Voitures (
    matricule VARCHAR(20) PRIMARY KEY,
    id_prop INT,
    modele VARCHAR(50),
    couleur VARCHAR(20),
    voiture_est_certifie BOOLEAN,
    voiture_certificat VARCHAR(100),
    FOREIGN KEY (id_prop) REFERENCES Utilisateurs(id_uti),
    CONSTRAINT unique_matricule UNIQUE (matricule)
);

-- Create Trips table
CREATE TABLE Trajets (
    id_trajet INT AUTO_INCREMENT PRIMARY KEY,
    depart VARCHAR(100),
    arrivee VARCHAR(100),
    timestamp TIMESTAMP,
    nbr_place INT,
    prix DECIMAL(10, 2),
    id_conducteur INT,
    id_voiture VARCHAR(20),
    details JSON,
    FOREIGN KEY (id_conducteur) REFERENCES Utilisateurs(id_uti),
    FOREIGN KEY (id_voiture) REFERENCES Voitures(matricule)
);

-- Create Reservations table
CREATE TABLE Reservations (
    id_reservation INT AUTO_INCREMENT PRIMARY KEY,
    id_trajet INT,
    id_reserveur INT,
    nbr_place INT,
    FOREIGN KEY (id_trajet) REFERENCES Trajets(id_trajet),
    FOREIGN KEY (id_reserveur) REFERENCES Utilisateurs(id_uti)
);

-- Create Reports table
CREATE TABLE Signalements (
    SignalerUserID INT,
    TargetUserID INT,
    Description JSON,
    FOREIGN KEY (SignalerUserID) REFERENCES Utilisateurs(id_uti),
    FOREIGN KEY (TargetUserID) REFERENCES Utilisateurs(id_uti)
);
