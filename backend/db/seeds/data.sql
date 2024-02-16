-- Users
INSERT INTO users (name, email, sub_id) VALUES
  ('Kamran', 'abcdefg@hotmail.com', '10001'),


-- Food Donations
INSERT INTO food_donations (title, description, start_date, end_date, phone, preferred_food, allergies, target_amount_in_grams, user_id)
VALUES ('Church Donation','Non-perishable foods ONLY', '2024-06-01', '2024-07-02', '9054273768', 'Canned goods, cereal, non-perishable foods', 'All foods welcome', 22500,1);

-- Address
INSERT INTO address (address_1, address_2, city, province, postal_code, food_donation_id)
VALUES ('ABC street', '', 'Surrey', 'British Columbia', 'ABC 1F2',1),


-- Messages
INSERT INTO messages (name, email, message, created_at, food_donation_id)
VALUES ('John Smith','abcdefg@hotmail.com', 'This is a message.', '2024-01-29',1),

