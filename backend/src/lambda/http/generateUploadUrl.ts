import 'source-map-support/register'

import {APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler} from 'aws-lambda'
import {uploadAttachment} from "../../businessLogic/todos";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const todoId = event.pathParameters.todoId
    const newObj = await uploadAttachment(todoId)
    return {
        statusCode: 202,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            uploadUrl: newObj.uploadUrl
        })

    }
}
