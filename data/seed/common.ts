
export default async function createCommonCodes(prisma: any){
    common_codes.forEach(async (base_code) => {
        const { code_type, code_nation, code_translation, code, ...update } = base_code;
    
        try {
          const rs = await prisma.code.upsert({
            where: {
                code_type_code_code_nation: {
                    code_type,
                    code,
                    code_nation
                }
            },
            create: { 
                code_type, 
                code,
                code_translation,
                code_nation,
                order: 0,
                ...update,
                created_dt: new Date()
            },
            update: {
              code: String(code).trim(),
              code_type,
              code_nation,
              code_translation, 
              created_dt: new Date()
            }
          });
        } catch (e) {
          console.log({ code_type, code });
          console.log(e);
        }
      });
}
const common_codes =  [
    {
        "code_type": "in_out",
        "code_translation": "소득",
        "code": "in",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "in_out",
        "code_translation": "지출",
        "code": "out",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_type",
        "code_translation": "이체",
        "code": "transfer",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_type",
        "code_translation": "카드",
        "code": "credit ",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "transfer_type",
        "code_translation": "자동이체",
        "code": "auto_tranfer",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "transfer_type",
        "code_translation": "직접이체",
        "code": "self_tranfer",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "bank_type",
        "code_translation": "카카오뱅크",
        "code": "kakao",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "bank_type",
        "code_translation": "국민은행",
        "code": "kb",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "bank_type",
        "code_translation": "케이뱅크",
        "code": "kbank",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "bank_type",
        "code_translation": "하나은행",
        "code": "hana",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "bank_type",
        "code_translation": "우리은행",
        "code": "uri",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "bank_type",
        "code_translation": "기업은행",
        "code": "ibk",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "credit_type",
        "code_translation": "신한카드",
        "code": "shinhan",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "credit_type",
        "code_translation": "삼성카드",
        "code": "samsung",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "credit_type",
        "code_translation": "우리카드",
        "code": "uri",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "credit_type",
        "code_translation": "롯데카드",
        "code": "lotte",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "장기할부",
        "code": "installment",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "보험",
        "code": "insurance ",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "통신",
        "code": "communication",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "구독",
        "code": "subscription",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "차량",
        "code": "car",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "학자금",
        "code": "education",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "월세",
        "code": "house ",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "도시가스",
        "code": "gas ",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "전기",
        "code": "elec",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "수도",
        "code": "water",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "관리비",
        "code": "house_op",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "in_category",
        "code_translation": "급여",
        "code": "pay",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "in_category ",
        "code_translation": "기타",
        "code": "etc",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    },
    {
        "code_type": "out_category ",
        "code_translation": "자동차보험",
        "code": "car_insu",
        "code_nation": "ko",
        "created_dt": "2025-04-09"
    }
]
