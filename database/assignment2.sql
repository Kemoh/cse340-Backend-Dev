-- 1. The Tony Stark insert SQL statement 
INSERT INTO public.account
(account_firstname,
 account_lastname,
 account_email,
 account_password
)Functions
VALUES ('Tony',
		'Stark',
		'tony@starkent.com',
		'Iam1ronM@n'
		);

-- 2. The Tony Stark update SQL statement
UPDATE public.account
SET account_type = 'Admin'
WHERE account_id = 1

-- 3. The delete Tony Stark SQL statemen
DELETE FROM public.account
WHERE account_id = 1

-- 4. The description update SQL statement
UPDATE public.inventory
SET inv_description = REPLACE(inv_description,
                'the small interiors',
                'a huge interior'
							  )
WHERE inv_id = 10;


-- 5. Inventory Items in the Sport Classification (Using INNER JOIN)
SELECT inv_make, inv_model, classification_name
FROM public.inventory
INNER JOIN public.classification
ON public.inventory.classification_id = public.classification.classification_id
WHERE classification_name = 'Sport';

-- 6. The inv_image and inv_thumbnail update query
UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
	inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');