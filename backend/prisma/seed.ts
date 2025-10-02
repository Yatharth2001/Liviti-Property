import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Create sample ideas
  const ideas = await Promise.all([
    prisma.idea.create({
      data: {
        text: "Add dark mode to the app",
        upvotes: 5,
      },
    }),
    prisma.idea.create({
      data: {
        text: "Implement real-time notifications",
        upvotes: 3,
      },
    }),
    prisma.idea.create({
      data: {
        text: "Add keyboard shortcuts for power users",
        upvotes: 7,
      },
    }),
    prisma.idea.create({
      data: {
        text: "Create mobile app version",
        upvotes: 2,
      },
    }),
    prisma.idea.create({
      data: {
        text: "Add idea categorization and tags",
        upvotes: 4,
      },
    }),
  ]);

  console.log(`✅ Created ${ideas.length} sample ideas`);
  console.log("Sample ideas:");
  ideas.forEach((idea, index) => {
    console.log(`${index + 1}. "${idea.text}" (${idea.upvotes} upvotes)`);
  });
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
