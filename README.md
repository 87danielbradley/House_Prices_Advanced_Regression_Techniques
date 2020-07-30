# Home_Value_Predictor
https://house-prices-random-forest.herokuapp.com/ 

Our team took on the task of creating a machine learning algorithm using advanced regression techniques to predict the prices of homes in Ames, Iowa.

The business objective of this project was to design a tool that allows potential home buyers to find undervalued homes and save money making a purchase. Home buying can be a difficult task and there are many features that impact the cost of a house.

This data used and the objective made this a supervised learning task, with multiple regression and batch learning.

The team found a data set with 1,460 homes and 81 descriptive features, including the overall price of the home. The prices were not normally distribuoted so that data was first normalized using various techniques. Each model used a different normalization technique including a box cox tranformation and natural log. Also, there were close to 7,000 null values so those were eith removed, replaced with the median or replaced with the mean, depending on the situation.

The data included both categorical and numeric features. For the most part, the numerical features were used, but through one hot label encoding and manual changes, highly correlated categorical data was introduced.

Once the data was normalized, the following regression techniques were applied to develop models:

Ordinary Least Squares Multiple Regression:

    -Used a seaborn correlation heat map to eliminate poorly correlated features
    -Scaled and fit the training data to perform a transformation on the training and testing data sets
    -Used a linear regression model to develop predictions
    -Scored the model on the training and testing data sets
    -Calculated the Mean Squared Error and R^2 values

    Result:
    -Mean_Squared_Error: .0945
    -Score of testing model: 91.3%

![Residuals](static/images/ols_regression.svg)
