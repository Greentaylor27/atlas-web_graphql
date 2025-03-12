const { GraphQLObjectType ,GraphQLString, GraphQLInt, GraphQLSchema, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');
const lodash = require('lodash');
const Task = require('../models/task');
const Project = require('../models/project');

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: () => ({
        addProject: {
            type: ProjectType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                weight: { type: new GraphQLNonNull(GraphQLInt) },
                description: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parents, args) => {
                const newProject = new Project({
                    title: args.title,
                    weight: args.weight,
                    description: args.description
                });
                const savedProject = newProject.save();
                return savedProject
            }
        },
        addTask: {
            type: TaskType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                weight: { type: new GraphQLNonNull(GraphQLInt) },
                description: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve: (parents, args) => {
                const newTask = new Task({
                    title: args.title,
                    weight: args.weight,
                    description: args.description
                });
                const savedTask = newTask.save();
                return savedTask;
            }
        }
    })
})

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString },
        task: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                return Task.find({ projectID: parent.id });
            }
        }
    })
});

const TaskType = new GraphQLObjectType({
    name: "Task",
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        projectID: { type: GraphQLString },
        description: { type: GraphQLString },
        project: {
            type: ProjectType,
            resolve(parent, args) {
                return projects.findById(parent.projectID)
            }
        }
    })
});



const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        task: {
            type: TaskType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return lodash.find(tasks, { id: args.id });
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return lodash.find(projects, { id: args.id });
            }
        },
        tasks: {
            type: new GraphQLList(TaskType),
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return tasks;
            }
        },
        projects: {
            type: new GraphQLList(ProjectType),
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return projects;
            }
        }
    }
});

// Tasks for testing task 2 
const tasks = [
    {
        id: "1",
        title: "Create your first webpage",
        weight: 1,
        projectID: "1",
        description: "Create your first HTML file 0-index.html with:\n- Add the doctype on the first line (without any comment)\n- After the doctype, open and close an HTML tag\n- Open your file in your browser (the page should be blank)"
    },
    {
        id: "2",
        title: "Structure your webpage",
        weight: 1,
        projectID: "1",
        description: "Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order"
    }
]


// Tasks for testing task 3
const projects = [
    {
        id: "1",
        title: "Advanced HTML",
        weight: 1,
        description: "Welcome to the Web Stack specialization. The 3 first projects will give you all basics of the Web development: HTML, CSS and Developer tools. In this project, you will learn how to use HTML tags to structure a web page. No CSS, no styling - don’t worry, the final page will be “ugly” it’s normal, it’s not the purpose of this project. Important note: details are important! lowercase vs uppercase / wrong letter… be careful!"
    },
    {
        id: "2",
        title: "Bootstrap",
        weight: 1,
        description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components."
    }
]


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
