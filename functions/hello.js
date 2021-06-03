exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: "SOMA",
            age: 24,
            email: "soma@test.com",
        }),
    };
};
