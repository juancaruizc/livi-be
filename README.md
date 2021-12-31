# livi-be

Tech: Node, Express, Postgres, knexjs, Heroku

Endpoint:

https://api-livi.herokuapp.com/api/reviews

Response:

[<br />
   {<br />
     user_review_id: 1,<br />
     user_review_title: "Incredibly grateful for Livi getting me the best dietitian. I’ve really (and seriously) been making progress.",<br />
     user_id: 1,<br />
     user_review_created_on: "2021-12-30T21:42:41.359Z",<br />
     user_display_name: "llana"<br />
   }<br />
]

Database:

Users
|    user_id    | user_display_name |
| ------------- | ----------------- |
|      1        |       Rick        |

User_reviews

|    user_review_id   | user_review_title | user_id |   user_review_created_on  |
| ------------------- | ----------------- | ------- | --------------------------|
|      1              |    lorem ipsum    |    1    |  2021-12-30T21:42:41.359Z |
 
