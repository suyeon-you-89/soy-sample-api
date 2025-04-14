import { AuditRecord } from 'src/audit-record/entities/audit-record.entity';
import { ApiProperty } from '@nestjs/swagger';
import { BankAccount } from 'src/bank-account/entities/bank-account.entity';

export class Member extends AuditRecord{
    @ApiProperty({ example: 'kildong'})
    id: string; 

    @ApiProperty({ example: '홍길동'})
    name: string; 

    @ApiProperty({ name: '계좌 정보'})
    bankAccounts: BankAccount[]


}
