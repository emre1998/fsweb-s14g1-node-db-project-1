-- Veritabanı Sorguları

-- Posta kodu 1010 olan tüm müşterileri bulun
SELECT * FROM Customers WHERE PostalCode = 1010;

-- id'si 11 olan tedarikçinin telefon numarasını bulun
SELECT Phone FROM Suppliers WHERE SupplierID = 11;

-- Verilen ilk 10 siparişi, sipariş tarihine göre azalan şekilde listeleyin
SELECT * FROM Orders ORDER BY OrderDate DESC LIMIT 10;

-- Londra, Madrid veya Brezilya'da yaşayan tüm müşterileri bulun
SELECT * FROM Customers WHERE City IN ('London', 'Madrid', 'Brezilya');

-- "The Shire" için bir müşteri kaydı ekleyin, ilgili kişi adı "Bilbo Baggins", adres - "Bag End" içinde "1 Hobbit-Hole", posta kodu "111" ve ülke "Middle Earth"
INSERT INTO Customers (customerName,Address,City,PostalCode,Country)
VALUES("Biblo Baggins", "Bag End,Hobbit-Hole","The Shine","111","Orta Dünya");

-- Posta kodu "11122" olarak değişecek şekilde Bilbo Baggins kaydını güncelleyin
UPDATE Customers SET PostalCode = '11122' WHERE CustomerID = 92;
-- (Zorlayıcı Görev) Müşteriler tablosunda kaç farklı şehrin saklandığını keşfetmek için bir sorgu bulun. Tekrarlar çift sayılmamalıdır
SELECT COUNT(DISTINCT City) AS NumCities FROM Customers;

-- (Zorlayıcı Görev) 20 karakterden uzun adları olan tüm tedarikçileri bulun. Adın uzunluğunu almak için "length(SupplierName)" kullanabilirsiniz.
SELECT * FROM Suppliers WHERE LENGTH(SupplierName) > 20;
