<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$port = 3306;

$conn = new mysqli($servername, $username, $password, "", $port);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS ecommerce_db";
if ($conn->query($sql) === TRUE) {
  echo "Database created successfully\n";
} else {
  echo "Error creating database: " . $conn->error . "\n";
}

$conn->close();
