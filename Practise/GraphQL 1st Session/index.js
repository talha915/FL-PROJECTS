const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt, GraphQLString } = require('graphql');


const users = [
    {
        'id': 1,
        'name': 'A',
        'age': 1
    },
    {
        'id': 2,
        'name': 'B',
        'age': 2
    },
    {
        'id': 3,
        'name': 'C',
        'age': 3
    },
    {
        'id': 4,
        'name': 'D',
        'age': 4
    },
    {
        'id': 5,
        'name': 'E',
        'age': 5
    }
]

const userType = new GraphQLObjectType({
    name: 'Users',
    description: '...',
    fields: {
        id: {
            type: GraphQLInt
        },
        name: {
            type: GraphQLString
        },
        age: {
            type: GraphQLInt
        }
    }
});
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        'name': 'Query',
        'description': '...',
        fields: () => ({
            users: {
                type: new GraphQLList(userType),
                resolve: (parent, args) => {
                    return users;
                }
            },
            user: {
                type: userType,
                args: {
                    id: {
                        type: GraphQLInt
                    }
                },
                resolve: (parent, {id}) => {
                    const user = users.filter(user=>user.id == id);
                    return user[0];
                }
            }
        })
    })
});
const app = express();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 3000;

app.listen(PORT, ()=> {
    console.log("Listening at ", PORT);
})