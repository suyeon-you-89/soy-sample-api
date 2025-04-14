import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CodeModule } from './code/code.module';
import { MemberModule } from './member/member.module';
import { BankAccountModule } from './bank-account/bank-account.module';
import { CreditCardModule } from './credit-card/credit-card.module';
import { IncomeModule } from './income/income.module';
import { ExpenseModule } from './expense/expense.module';
import { BudgetModule } from './budget/budget.module';

@Module({
  imports: [PrismaModule, CodeModule, MemberModule, 
    IncomeModule, BankAccountModule, 
    BudgetModule, 
    CreditCardModule, ExpenseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
