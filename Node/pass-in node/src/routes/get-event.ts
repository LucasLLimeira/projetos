import { FastifyInstance } from "fastify";

export async function getEvent(app: FastifyInstance) {
    app
    .get("/events/:eventId", (request, reply) => {
        
    })
}