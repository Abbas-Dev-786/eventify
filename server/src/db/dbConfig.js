import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient({ log: ["error", "query"] }).$extends({
  query: {
    users: {
      $allOperations({ operation, args, query }) {
        if (["create", "update"].includes(operation) && args.data["password"]) {
          args.data["password"] = bcrypt.hashSync(args.data["password"], 10);
        }
        return query(args);
      },
    },
  },
});

export default prisma;
