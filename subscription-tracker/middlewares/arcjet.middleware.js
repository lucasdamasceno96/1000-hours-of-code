import aj from "../config/arcjet.js";

export const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);
        if (decision.isDenied) {
            if (decision.reason === "BOT") {
                console.log("Blocked bot request:", decision);
                return res.status(403).json({ message: "BOT Detected " });
            }
            if (decision.reason === "RATE_LIMIT") {
                console.log("Rate limit exceeded:", decision);
                return res.status(429).json({ message: "Too many requests" });
            }
            if (decision.reason === "ATTACK") {
                console.log("Attack detected:", decision);
                return res.status(403).json({ message: "Attack detected" });
            }
            if (decision.reason === "UNKNOWN") {
                console.log("Unknown reason for blocking:", decision);
                return res.status(403).json({ message: "Request blocked" });
            }
            return res.status(403).json({ message: "Access denied " });
        }
        next();
    } catch (error) {
        console.error("Error in arcjet middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default arcjetMiddleware;