export default {
  "success": [
    {
      "desc": "two-pass-generated-by-javascript",
      "cipher": "k6VoY3NiMJKWonB32BIEPJ9l6GptdyuE605U2Z6AzgQAAAACxxgSMCdlqqda1V9NzRzqLxH1nOjfU9EpBWpCxzESxLGepXDjUyO5k7uysDd6kHU7uzjJhCFHWoJMVBQ10idH4Cgku0Q1tPNZSWYbwYLt7JaicHfYEgCJTlAngEqLIb8LrwMKg5fOBAAAAALHGBL6Iaka8OICDF8YH3NHuzhgXoPZnLNKZ_XHMRKc3h3IshxXAzK-DL__auYU7K1flNLmyr5MvB1-no1qhuSJV396_ErKibVltZCbYn0ixAGA",
      "unlock": [
        {
          "type": "pwHash",
          "passphrase": "zombies1"
        },
        {
          "type": "pwHash",
          "passphrase": "zombies2"
        }
      ],
      "signPubKey": "1wJgw78QEoCVkHtLckR5u0Ak1Z0PGCjo9mwrYbvFFY8",
      "derivations": {
        "m/0/1/2/3/4/5/6/7/8/9": "oXyWF6oUWVTeyxXDHx16nFqssdjFxxC1Ka0Xq8IXUCo",
        "m/68": "cxWsMWsypoe4wcHZ2ptmYwA4bP0CydwUCW0kNag8Wyk",
        "m/68/0": "yXhzkY93NGLLJg2hpEeN1i8bqDBQroGorc8ZEEmqfo8",
        "m/68/0/65": "AUaylELwtjzWK-FfCiE6UtMzbTHzqZO7_KS_v6plztM",
        "m/68/0/65/0": "Dz3hw6Ar3MTeUG3uXENbZGKQnR-ScndDL7VGNIBcmwI"
      }
    },
    {
      "desc": "pass-and-qa-generated-by-javascript",
      "cipher": "k6VoY3NiMJKWonB32BKe-O6vMrDjWVnpVhj98V5NzgQAAAACxxgSDFmHD_c8i98X9RigE-BTe4d6wcqUe1ehxzESDe9GtXA6mLKwFUZXYhuV2-IpuXLZCrPz1LA1IE4mYyPj1N-0FjYDwZ0wkI_VoBfdcJmicWHYEo7LoXFAsjBgGb05G-ocXgTOBAAAAAKjcS1ho3EtYqNxLWPHGBK5Mu8Ollp7-PwBU10cXAazrXh35S4jyTnHMRIVwCZgcK5pPRyxyhT7qTzZtx89ILV1JbSfvZVTZCt4h7Tlk9XFEg61Nf_ewqp_sYXPxAGA",
      "unlock": [
        {
          "type": "pwHash",
          "passphrase": "my passphrase with multiple words"
        },
        {
          "type": "securityQuestions",
          "questionList": ["q-a", "q-b", "q-c"],
          "answerList": ["a-a", "a-b", "a-c"]
        }
      ],
      "signPubKey": "c1JiJhZrmi9vwQfQMaicsLIYmkSEMUZGgKvHzcqSXiE",
      "derivations": {
        "m/68/0/65/0": "F1EnZMjczH5z7B3nnfsZ12X3VjtHhPY2TFyxnXgyKj0"
      }
    },
    {
      "desc": "two-pass-generated-by-rust",
      "cipher": "k6VoY3NiMJKWonB3xBDvitO9hgaawrOELYklltZTzgQAAAACxBh3AQ92Ex9xhyznO8YRrRoSC_Sf51qX-9vEMUz6qA95RKgTSiMKkozBZBRUaOxQwfs0buNd6G_EfBKdTETmgZmPxmh99c5m5RbBlxmWonB3xBAChvlVAyrUTffj0Q8zEfaEzgQAAAACxBhWneCx9eUb40tRZNFxHVrBPZlB-ABNhCDEMeEB6Vxnw1sddmwrocq8kfluP5eT2Ur9IUXjQZIyfmDkv1PYU5EXVOCTADKKqq2ZqgjEAA",
      "unlock": [
        {
          "type": "pwHash",
          "passphrase": "first-pass"
        },
        {
          "type": "pwHash",
          "passphrase": "second-pass"
        }
      ],
      "signPubKey": "6a4EYRssQjP9tPMZzXfowzxVeevR3ow61fuAyQTKFVU",
      "derivations": {
        "m/68/0/65/0": "tJvU7AuDLBK3Aytmu5XWorMjYTTOpmrpbttvStVIoIU"
      }
    },
    {
      "desc": "pass-and-qa-generated-by-rust",
      "cipher": "k6VoY3NiMJKWonB3xBAGIKkVeLcUARqvvkLnmbtVzgQAAAACxBjMEISIUf4ioqIpkumT0pCM_zhbZYJrJ1TEMdPLC2oEJD_IyLtuMl0vHidD0Zd_0Lv2YkWhw43rzO0a6AuhCpfeRDq-mq51z8xiEZWZonFhxBDN3Pdi36-ZWRcX4lEbR3T_zgQAAAACr0Zhdm9yaXRlIENvbG9yP6pGaXJzdCBQZXQ_pUhhaXI_xBh3fIjNVwiQuWwoH2GRIXxPfnFF2DeEHcXEMSJpFhAyt3d5slfJkNpES13T7YraNPw2QDDtDop3oXdo26ZQmvB_KmU02mOF4bkd5fzEAA",
      "unlock": [
        {
          "type": "pwHash",
          "passphrase": "my passphrase with multiple words"
        },
        {
          "type": "securityQuestions",
          "questionList": ["Favorite Color?", "First Pet?", "Hair?"],
          "answerList": ["\t  BLuE", "ZoMbOrG\t ", " nope "]
        }
      ],
      "signPubKey": "6BZCrcX_sL1uoPR_HXv0uTfbTg2eMiyyQMnAp713uP4",
      "derivations": {
        "m/68/0/65/0": "DJR1AzDDMIUHwZOEc8G2tXcdIFye7KV91uTmHhvuV7A"
      }
    }
  ]
}
