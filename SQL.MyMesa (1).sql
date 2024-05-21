create database myMesa;
use myMesa;
create table cliente (
    id int auto_increment primary key,
    nome varchar(50) not null,
    cpf int
);
CREATE TABLE cardapio_bebidas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(6, 2) NOT NULL
);

INSERT INTO cardapio_bebidas (nome, preco) VALUES
('Coca-Cola', 5.00),
('Coca-Cola ZERO', 5.00),
('Fanta Laranja', 5.00),
('Pepsi', 5.00),
('Schweppes', 5.00),
('Guaraná', 5.00);

CREATE TABLE cardapio_pizza (
    id INT AUTO_INCREMENT PRIMARY KEY,
    sabor VARCHAR(100) NOT NULL,
    tamanho ENUM('medio', 'grande') NOT NULL,
    preco DECIMAL(6, 2) NOT NULL
);

INSERT INTO cardapio_pizza (sabor, tamanho, preco) VALUES
('4 queijos', 'medio', 30.00),
('4 queijos', 'grande', 40.00);

CREATE TABLE cardapio_porcao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    peso INT NOT NULL,
    preco DECIMAL(6, 2) NOT NULL
);

INSERT INTO cardapio_porcao (descricao, peso, preco) VALUES
('Porção de fritas de batatas 300g', 300, 15.00),
('Porção de fritas de batatas 500g', 500, 20.00);

CREATE TABLE cardapio_sobremesa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(6, 2) NOT NULL
);

INSERT INTO cardapio_sobremesa (nome, preco) VALUES
('Torta Holandesa', 12.00);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bebida_id INT,
    pizza_id INT,
    porcao_id INT,
    sobremesa_id INT,
    FOREIGN KEY (bebida_id) REFERENCES cardapio_bebidas(id),
    FOREIGN KEY (pizza_id) REFERENCES cardapio_pizza(id),
    FOREIGN KEY (porcao_id) REFERENCES cardapio_porcao(id),
    FOREIGN KEY (sobremesa_id) REFERENCES cardapio_sobremesa(id)
);


