import { default as prisma } from './prismaClient';
import createCommonCodes from './seed/common';
  


async function main() {
    await createCommonCodes(prisma); 
} 

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async (e: any) => {
    console.error({ e }, 'error');
    await prisma.$disconnect();
    process.exit(1);
});
