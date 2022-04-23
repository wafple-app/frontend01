// Restaurant Info
export const restaurant = {
    id: 1,
    name: 'Yeon JAE Food InC',
    rating: 4.2,
    ratingCount: 32,
    banner_url: require('./src/assets/restaurant_example_1.png')
};

// Restaurant Menus
export const restaurantMenus = [
    {
        restaurant_id: 1,
        food_id: 1,
        rating: 4.12,
        ratingCount: 12,
        food_name: 'ramen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant_id: 1,
        food_id: 2,
        rating: 2.12,
        ratingCount: 2,
        food_name: 'food_2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '14',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant_id: 1,
        food_id: 3,
        rating: 4.12,
        ratingCount: 12,
        food_name: 'ramen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant_id: 1,
        food_id: 4,
        rating: 4.12,
        ratingCount: 12,
        food_name: 'ramen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant_id: 1,
        food_id: 5,
        rating: 4.12,
        ratingCount: 12,
        food_name: 'ramen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant_id: 1,
        food_id: 6,
        rating: 4.12,
        ratingCount: 12,
        food_name: 'ramen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant_id: 1,
        food_id: 7,
        rating: 4.12,
        ratingCount: 12,
        food_name: 'ramen',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    }
];

// User Info
export const user = {
    first_name: 'Yeon Jae',
    last_name: 'Kim',
    email: 'yeonjaekim@gmail.com',
    token: 'randomToken'
};

// In Menus component
export const menus = [
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.12,
        ratingCount: 12,
        food_name: 'ramen',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
    {
        restaurant: {
            id: 1,
            name: 'Yeon JAE Food InC',
            rating: 4.2,
            ratingCount: 32,
            banner_url: require('./src/assets/restaurant_example_1.png')
        },
        food_id: 1,
        user: {
            id: 1,
            name: 'Yeon JAE',
            user_icon: require('./src/assets/review_user_icon.png')
        },
        rating: 4.0,
        ratingCount: 12,
        food_name: 'Recommended',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: '30.10',
        food_url: require('./src/assets/wafple_food_example.png'),
        created_at: '2022-01-01',
        updated_at: '2022-01-02'
    },
];

// In FoodReview component
export const menuReviews = [
    {
        user_id: 1,
        user_name: 'Yeon Jae Kim',
        rating: 3.1,
        ratingCount: 12,
        food_id: 1,
        food_url: require('./src/assets/small_food_example_1.png'),
        user_icon: require('./src/assets/review_user_icon.png'),
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        user_id: 2,
        user_name: 'Hailey Yang',
        rating: 4.1,
        ratingCount: 12,
        food_id: 2,
        food_url: require('./src/assets/small_food_example_2.png'),
        user_icon: require('./src/assets/review_user_icon.png'),
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        user_id: 3,
        user_name: 'Han',
        rating: 1.1,
        ratingCount: 12,
        food_id: 3,
        food_url: require('./src/assets/small_food_example_3.png'),
        user_icon: require('./src/assets/review_user_icon.png'),
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        user_id: 4,
        user_name: 'Jenny',
        rating: 3.2,
        ratingCount: 12,
        food_id: 4,
        food_url: require('./src/assets/small_food_example_4.png'),
        user_icon: require('./src/assets/review_user_icon.png'),
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        user_id: 5,
        user_name: 'Yeon Jae Kim 2',
        rating: 3.1,
        ratingCount: 12,
        food_id: 1,
        food_url: require('./src/assets/small_food_example_1.png'),
        user_icon: require('./src/assets/review_user_icon.png'),
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        user_id: 6,
        user_name: 'Hailey Yang 2',
        rating: 4.1,
        ratingCount: 12,
        food_id: 2,
        food_url: require('./src/assets/small_food_example_2.png'),
        user_icon: require('./src/assets/review_user_icon.png'),
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        user_id: 7,
        user_name: 'Han 2',
        rating: 1.1,
        ratingCount: 12,
        food_id: 3,
        food_url: require('./src/assets/small_food_example_3.png'),
        user_icon: require('./src/assets/review_user_icon.png'),
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        user_id: 8,
        user_name: 'Jenny 2',
        rating: 3.2,
        ratingCount: 12,
        food_id: 4,
        food_url: require('./src/assets/small_food_example_4.png'),
        user_icon: require('./src/assets/review_user_icon.png'),
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
];
