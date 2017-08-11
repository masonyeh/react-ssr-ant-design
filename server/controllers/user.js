async function getUserInfo(ctx) {
    ctx.body = {
        name: 'Mason',
        gender: 'male',
        age: 20
    }
}

export default {getUserInfo}
