import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize('sqlite::memory:'); // Example: using an in-memory SQLite database

// Define the User model
const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true // Ensures the value is a valid email format
    }
  }
}, {
  // Model options go here
  timestamps: true, // Adds createdAt and updatedAt fields
  tableName: 'users' // Explicitly set the table name
});

// Synchronize the model with the database (create the table if it doesn't exist)
(async () => {
  await sequelize.sync({ force: true }); // `force: true` drops the table if it already exists
  console.log("Database and tables synced!");

  // Example usage: Create a new user
  const jane = await User.create({
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@example.com'
  });
  console.log("Jane's ID:", jane.id);

  // Example usage: Find a user
  const foundUser = await User.findOne({ where: { firstName: 'Jane' } });
  console.log("Found user:", foundUser.toJSON());
})();