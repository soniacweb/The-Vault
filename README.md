### ![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) 

<img src='https://i.imgur.com/LmW8z5l.jpg'/>

Evaluation
​
* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?
​
* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?
​
* __Creativity__: Did you added a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?
​
* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors as we have in class?
​
* __Problem Solving__: Are you able to defend why you implemented your solution in a certain way? Can you demonstrated that you thought through alternative implementations? _(Note that this part of your feedback evaluation will take place during your one-on-one code review with your instructors, after you've completed the project.)_
Coll

### Installation
- Mongod

Back:
- npm run seed
- nodemon app.js

Front:
- npm run: front

### Timeframe

1 week

### Team

Aichi Chang, Lucy Casey, Sarah Wood, and Sonia Choudhury

### Overview

The Vault is a lifestyle blog and website, carefully curating articles covering trends in fashion, media, literature, culture, and eateries in London. Users can sign up, log in and leave comments and thoughts on articles. The intention was to also allow them to 'like' and 'pin' articles onto their own dashboard,which are features we'd like to implement.

<img src='https://media.giphy.com/media/jTeawDs6hBHXyYkHtv/giphy.gif' />

### Technical Requirements

Work in a team, using git to code collaboratively.
Build a full-stack application by making your own backend and your own front-end
Use an Express API to serve your data from a Mongo database
Consume your API with a separate front-end built with React
Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
Be deployed online so it's publicly accessible.
Have automated tests for at least one RESTful resource on the back-end. Improve your semployability by demonstrating a good understanding of testing principals.

### Necessary Deliverables
A working app hosted on the internet
A link to your hosted working app in the URL section of your Github repo
A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project
A readme.md file with:
An embedded screenshot of the app
Explanations of the technologies used
A couple paragraphs about the general approach you took
Installation instructions for any dependencies
Link to your user stories/wireframes – sketches of major views / interfaces in your application
Link to your pitch deck/presentation – documentation of your wireframes, user stories, and proposed architecture
Descriptions of any unsolved problems or major hurdles you had to overcome

### Technologies

- React.js
- HTML5
- CSS3 
- Bulma
- JavaScript(ES2019)
- React.js
- Express
- Mongoose
- MongoDB
- Node.js
- Babel
- Webpack
- Insomnia
- GitHub

### Apis used:
We created 6 individual APIs for films, books, music, clothes, current, and our community page.

We also used the Mapbox web services API for the community articles.


### File Structure

<img src='https://i.imgur.com/jo8PKFz.png' height='360px' width='250px' />
<img src='https://i.imgur.com/qRZHsq7.png' height='380px' width='240px' />

## Frontend

We utilised React Hooks on the frontend. We used the Uber's React Map GL package for Mapbox for our community page, it has the popup function so the user will be able to check the information quickly.

The comment feature was added for the project as we have several pages requiring this as feature. We pulled the comment form out to the main component, passed props updateData back to setData. The idea being, once the user left a comment, the comment will push to our single article's comment array and get rendered.

The initial state
```js
const [data, setData] = useState( { comments: [] })
```

The original data remains the same, but the updateData will set the comments into our data

```js
  <CommentForm 
    url={`/api/clothing/${props.match.params.id}/comments`}
    updateData={setData}
    data={data}
  />
```

All comments will getrendered into the bulma comment template:

``` js
  <div className='columns'>
    <div className='column'>
      {data.comments.map((comment) => 
        <div className="is-half" 
          key={comment._id} > 
          <div>{comment.content}</div>
          <br />
          <button className="delete" id={comment._id} onClick={(e) => handleDelete(e)}></button> 
        </div>
      )}
    </div>
  </div> 
```

### Homepage

- Hero image and title
- Bottom Navbar

### Wireframe

Initial draw up of the landing page:

<img src='https://i.imgur.com/rHxuzhU.png' height='400px' width='400px'/>

#### Community/Eateries and Pubs Page:

<img src='https://media.giphy.com/media/fsOr0ZKs12tzSWorsz/giphy.gif' height='360px' width='600px' />

<img src='https://media.giphy.com/media/Za3OPd7yaXQuLKuvYy/giphy.gif' height='360px' width='600px' />

#### Books: 

<img src='https://media.giphy.com/media/S4H6pDP9fxpFEs3vuB/giphy.gif' height='360px' width='600px' />

## Backend 

We have four primary themes for our app and they all requireed different schemas. We therefore set up several different models and an additional user model in our backend.

```js
const userSchema = new mongoose.Schema({ 
  username: { type: String, required: true, unique: true }, 
  email: { type: String, required: true },
  password: { type: String, required: true  }, 
  likes: [{ type: mongoose.Schema.ObjectId, ref: 'users' }]
}, {
  timestamps: true, 
  toJSON: { 
    transform(doc, json) {
      return { 
        username: json.username,
        id: json._id,
        likes: json.likes 
      }
    }
  }
})
```

### Modifications and improvements:
- Search component, rating feature does not record and save, pinning, create user dashboard
- Develop articles under 'Current' section
- Fix bug for logging out
- Menu - change onClick to hover on mobile view
- Create user dashboard
- Messaging exchange feature for users under 'Clothing' section
