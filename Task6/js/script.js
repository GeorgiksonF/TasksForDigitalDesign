var model = [
    {
        id: 0,
        title: 'Title text 1',
        text: 'Some text 1',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 1,
        title: 'Title text 2',
        text: 'Some text 2',
        user: {
            id: 1,
            name: 'user 2',
        },
    }, {
        id: 2,
        title: 'Title text 3',
        text: 'Some text 3',
        user: {
            id: 0,
            name: 'user 1',
        },
    }, {
        id: 3,
        title: 'Title text 4',
        text: 'Some text 4',
        user: {
            id: 2,
            name: 'user 3',
        },
    }, {
        id: 4,
        title: 'Title text 5',
        text: 'Some text 5',
        user: {
            id: 0,
            name: 'user 1',
        },
    }
]

function getUserGroup(articles) {
    let userList = [];
    for (let item of articles) {
        if (userList.length == 0) {
            userList.push(item.user)
        } else {
            for (let i = 0; i < userList.length; i++) {
                if (userList[i].id == item.user.id) {
                    break
                } else if (i == userList.length - 1) {
                    userList.push(item.user)
                } 
            }
        }
    }

    for (let user of userList) {
        user['posts'] = []
        for (let element of articles) {
            if (element.user.id == user.id) {
                user.posts.push({
                    'id': element.id,
                    'title': element.title,
                    'text': element.text
                })
            }
        }
    }

    return userList;
}

console.log( getUserGroup(model) )