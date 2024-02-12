-- Users
INSERT INTO users (name, email, sub_id) VALUES
  ('Kamran', 'abcdefg@hotmail.com', '10001'),
  ('Alice',  'sesamestreetbakedgoods@yahoo.ca', '10002'),
  ('Sahai',  'megpete411@gmail.com', '10003');

-- Food Donations
INSERT INTO food_donations (title, description, start_date, end_date, phone, preferred_food, allergies, target_amount_in_grams, user_id)
VALUES ('Church Donation','Non-perishable foods ONLY', '2024-06-01', '2024-07-02', '9054273768', 'Canned goods, cereal, non-perishable foods', 'All foods welcome', 22500,1),
       ('School Donation','Fruits & Vegetables', '2024-12-05', '2024-12-15', '1234567890', 'Canned fruits and vegetables', 'None', 55000,2),
       ('Festival Donation','School-friendly', '2024-09-18', '2024-11-03', '0987654321', 'Snack items, breakfast items, prepared meals', 'NO Nuts / legumes, NO Seafood', 100000,1);

-- Address
INSERT INTO address (address_1, address_2, city, province, postal_code, food_donation_id)
VALUES ('ABC street', '', 'Surrey', 'British Columbia', 'ABC 1F2',1),
       ('XYZ Street', '','London', 'Ontario', 'CDE 1J6',1);

-- Messages
INSERT INTO messages (name, email, message, created_at, food_donation_id)
VALUES ('John Smith','abcdefg@hotmail.com', 'This is a message.', '2024-01-29',1),
       ('Bob Johnson','sesamestreetbakedgoods@yahoo.ca', 'Another message here.', '2024-01-30',1);
