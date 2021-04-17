from Api.model import usersCollection
import http.client

def index (id):
    loggedDev = usersCollection.findById(id)

    usersNotLiked = usersCollection.find({
        "$and": [
            { "_id": { "$ne": id } },
            { "_id": { "$nin": loggedDev.likes } },
            { "_id": { "$nin": loggedDev.dislikes } }
        ]
    }).sort({ "_id": -1 })

    return usersNotLiked

def store (user):
    userExists = usersCollection.findOne({
        "user": user
    })

    connection = http.client.HTTPSConnection("https://api.github.com")
    connection.request("GET", "/users/{user.name}")
    response = connection.getresponse().body
    connection.close()

    dev = usersCollection.create({
        "name": response.name,
        "user": user.name,
        "bio": response.bio,
        "avatar": response.avatar
    })

    return dev

def like (user, dev, connectedUsers, io):
    loggedDev = usersCollection.findById(user)
    targetDev = usersCollection.findById(dev)

    if ~targetDev:
        return "Dev not found"

    loggedDev.likes.push(targetDev._id)
    loggedDev.save()

    if loggedDev._id in targetDev.likes:
        loggedSocket = connectedUsers[user]
        targetSocket = connectedUsers[dev]

        if loggedSocket:
            io.to(loggedSocket).emit('match', targetDev)
        if targetSocket:
            io.to(targetSocket).emit('match', loggedDev)

    return loggedDev

def dislike (user, dev):
    loggedDev = usersCollection.findById(user)
    targetDev = usersCollection.findById(dev)

    if ~targetDev:
        return 'Dev not found'
    loggedDev.dislikes.push(targetDev._id)
    loggedDev.save()

    return loggedDev