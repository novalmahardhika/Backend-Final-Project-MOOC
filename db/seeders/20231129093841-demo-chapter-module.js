'use strict';


const modules = [

  // Javacsript
  {
    id: "e1e4ec04-0ca4-4b8e-b3c3-4011c5ea2a1f",
    chapterId : "b1d45d20-5307-4f4e-bb5d-44fe9bb5a65d",
    title: "Inheritance Javascript",
    video: 'https://youtu.be/DqUPa0D2N78?si=4a6xvgI2wRVMuYlb'
  },
  {
    id: "3265ae17-4973-4a5e-b559-e192e6e5227a",
    chapterId : "b1d45d20-5307-4f4e-bb5d-44fe9bb5a65d",
    title: "Abstraction Javascript",
    video: 'https://youtu.be/jM0WcyQWMSM?si=6TgaeB2XdqFKADDm'
  },
  {
    id: "9dcf9553-dffe-4c55-a57b-37e604f69fa6",
    chapterId : "b1d45d20-5307-4f4e-bb5d-44fe9bb5a65d",
    title: "Getter and Setter Method",
    video: 'https://youtu.be/qkAb-4ZR5Yw?si=buEq2fk_1kgarXwW'
  },


  {
    id: "14f78050-297e-42b0-856d-6c650f01375a",
    chapterId : "b726c700-174f-4c63-9afa-c7a8f7946f8a",
    title: "For Loop",
    video: 'https://youtu.be/ZOQYIWLngSU?si=ura7jLZ9CnHx_T2y'
  },
  {
    id: "9aca045d-f995-4474-96b4-6157f937ba87",
    chapterId : "b726c700-174f-4c63-9afa-c7a8f7946f8a",
    title: "For Each",
    video: 'https://youtu.be/uOZWH0KEUs4?si=RqXYP2d6Kdi8Y2Wg'
  },
  {
    id: "093aa9b9-af1e-4dc8-bc82-10bbc45c197d",
    chapterId : "b726c700-174f-4c63-9afa-c7a8f7946f8a",
    title: "Mapping",
    video: 'https://youtu.be/G3BS3sh3D8Q?si=F-Y9C_kHwECpU7Ep'
  },

  // React

  {
    id: "ef3e8793-f26b-4a08-8049-b8d7dc17dc7d",
    chapterId : "c9ec4e52-0f14-41bb-96c5-5d0ef6b4d544",
    title: "useState",
    video: 'https://youtu.be/O6P86uwfdR0?si=j6QVSL0-ptB3aPN6'
  },
  {
    id: "f65c32cd-2f27-450c-a752-4d25e3dec706",
    chapterId : "c9ec4e52-0f14-41bb-96c5-5d0ef6b4d544",
    title: "useEffect",
    video: 'https://youtu.be/0ZJgIjIuY7U?si=SMBUYdrGi08yuZA-'
  },
  {
    id: "2bddc78a-8638-4859-b617-9712cf9c4fb8",
    chapterId : "c9ec4e52-0f14-41bb-96c5-5d0ef6b4d544",
    title: "useRef",
    video: 'https://youtu.be/t2ypzz6gJm0?si=bsQRjLmt8Ei7Ar2r'
  },


  {
    id: "fcb3afb9-a510-4bdf-9d94-9b54dc9ddb3b",
    chapterId : "2d193631-313a-4f33-a111-eefa4197c4bd",
    title: "What is useContext",
    video: 'https://youtu.be/_HdrLsyAdJg?si=LcibAa64IngJ_pNK'
  },
  {
    id: "f2bcd53f-f98b-40e2-826a-b0a45b95329b",
    chapterId : "2d193631-313a-4f33-a111-eefa4197c4bd",
    title: "Set Up useContext",
    video: 'https://youtu.be/5LrDIWkK_Bc?si=rHU10fk_D79Sqscy'
  },
  {
    id: "a36eb0ef-29f6-4b7a-bcc0-c2a6e45bb8ed",
    chapterId : "2d193631-313a-4f33-a111-eefa4197c4bd",
    title: "Alternative React Context",
    video: 'https://youtu.be/t9WmZFnE6Hg?si=yVctODHal1Vtbyrg'
  },

  // // Kotlin

    {
    id: "2267ccc8-d595-4f09-8311-3be0bf0cdc4f",
    chapterId : "88d77f39-36bf-46c8-bf6c-92411c5abf87",
    title: "What is Kotlin",
    video: 'https://youtu.be/PFVKjUUZMf8?si=byGIDCv_gD0_q8yR'
  },
  {
    id: "4a976622-d553-44f9-a07e-16b80ee7027b",
    chapterId : "88d77f39-36bf-46c8-bf6c-92411c5abf87",
    title: "How to Install",
    video: 'https://youtu.be/ehDRdcgIzGk?si=pR-zplxcwvacobLC'
  },
  {
    id: "edeecff2-01a7-499e-a6a4-e8b71c82f65f",
    chapterId : "88d77f39-36bf-46c8-bf6c-92411c5abf87",
    title: "Advantage Kotlin",
    video: 'https://youtu.be/3G49ivVxfkU?si=25j8JfFD5iOWPP-i'
  },


  {
    id: "b43ec66f-839e-4c6b-9b6e-2cb8d4bdb547",
    chapterId : "fde78c87-2ff9-4fa5-a823-2c49243ed103",
    title: "Variable Declaration",
    video: 'https://youtu.be/pkuO8ydjE2w?si=8hQSnf7yUNDVzV-F'
  },
  {
    id: "5c854a01-a4bf-48a8-b3c8-dc313e4d5763",
    chapterId : "fde78c87-2ff9-4fa5-a823-2c49243ed103",
    title: "Conditional",
    video: 'https://youtu.be/RfRbDIxXLtg?si=Fkjc4EOUtQLPAFBX'
  },
  {
    id: "23683881-93bd-4b29-8d99-08a29930dc1d",
    chapterId : "fde78c87-2ff9-4fa5-a823-2c49243ed103",
    title: "Function",
    video: 'https://youtu.be/obN78NEd47g?si=FaGQ_DOjpNSYtZfh'
  },

  // // Next js

    {
    id: "ea4eb8f8-7538-4d20-b70a-2e7dc45fbe44",
    chapterId : "587386f0-a011-42df-83e0-4892e9e0c7a4",
    title: "What is Next Js",
    video: 'https://youtu.be/__mSgDEOyv8?si=nEmwfdONxZ5AWgBD'
  },
  {
    id: "4c79bf8e-f86f-43f6-a273-62520b93be85",
    chapterId : "587386f0-a011-42df-83e0-4892e9e0c7a4",
    title: "Installing Project Next Js",
    video: 'https://youtu.be/ZPEoeaqgBrk?si=RumSJ_QohtNx0aFg'
  },
  {
    id: "ad68736d-b9a0-4669-8ebb-a93d7577ee33",
    chapterId : "587386f0-a011-42df-83e0-4892e9e0c7a4",
    title: "Folder Structure",
    video: 'https://youtu.be/FmerxXWD66g?si=cDNRlmBf_llbZckD'
  },

    {
    id: "80104f07-8106-4141-9023-baca31e854de",
    chapterId : "9c0f9722-6733-48d3-8284-c865fc4fe061",
    title: "What is SSR ?",
    video: 'https://youtu.be/WAMqFdCFotY?si=WRsz25AKw6hibUwv'
  },
  {
    id: "2814ac18-b57c-47dd-b878-a46e24d430cf",
    chapterId : "9c0f9722-6733-48d3-8284-c865fc4fe061",
    title: "Different CSR and SSR",
    video: 'https://youtu.be/YkxrbxoqHDw?si=SK96k_dUwLPqzcMW'
  },
  {
    id: "ee7a5e13-8160-4149-b361-f9db05ff2f71",
    chapterId : "9c0f9722-6733-48d3-8284-c865fc4fe061",
    title: "Advantage SSR",
    video: 'https://youtu.be/g0Jc5D6tiCo?si=HMJ3iNlsZcqFjR-V'
  },

  // data science

    {
    id: "4e4a2fd6-7af8-4d92-8266-a320471240b6",
    chapterId : "f1bfd929-38e6-4225-b113-3ead2e57cf30",
    title: "What is Data Science?",
    video: 'https://youtu.be/RBSUwFGa6Fk?si=RdaByWIeD3iNPPwX'
  },
  {
    id: "cf9fe70d-8fcd-43e4-8cc1-d2575d9a4e25",
    chapterId : "f1bfd929-38e6-4225-b113-3ead2e57cf30",
    title: "Understanding Data Science",
    video: 'https://youtu.be/ua-CiDNNj30?si=I_XG3t4hp5EDlnk_'
  },
  {
    id: "69f9bbb0-111d-4b67-94f9-0d64688c0833",
    chapterId : "f1bfd929-38e6-4225-b113-3ead2e57cf30",
    title: "Key Concepts in Data Analysis",
    video: 'https://youtu.be/LBSN34puYcQ?si=L7gmssjQfPF57659'
  },
  {
    id: "7cfc5143-b26b-4907-bdee-51c99097cb82",
    chapterId : "f1bfd929-38e6-4225-b113-3ead2e57cf30",
    title: "Data Science Tools and Techniques",
    video: 'https://youtu.be/zVBcmTkJqpo?si=_PRkg9qavqyUSsCf'
  },


  {
    id: "04b13a70-ac09-4de1-b5ed-f6c002db8d3a",
    chapterId : "ab50f2c1-e820-4ae8-8e8f-4416467021b5",
    title: "Introduction to Data Analysis",
    video: 'https://youtu.be/yZvFH7B6gKI?si=GTvMtJmYiTAUuVp9',
  },
  {
    id: "6f78222d-bdfe-4c29-8f6f-07fcb84d677d",
    chapterId : "ab50f2c1-e820-4ae8-8e8f-4416467021b5",
    title: "Advanced Data Analysis Methods",
    video: 'https://youtu.be/jempH0qPQn8?si=so55G3B79Wwn6DU_',
  },
  {
    id: "4b6886c1-4ade-49e7-8279-ad66b8418f9b",
    chapterId : "ab50f2c1-e820-4ae8-8e8f-4416467021b5",
    title: "Practical Applications of Data Analysis",
    video: 'https://youtu.be/_g5roKHj95o?si=hNXEE4EIdnxOhLEl',
  },



  {
    id: "bfe54c5e-aeb4-477d-9a29-7a4da141e2b0",
    chapterId : "44a42547-3b5a-4b77-a82f-7c22edde8e0e",
    title: "Understanding Data Representation",
    video: 'https://youtu.be/MiiANxRHSv4?si=dbDFJOwaZAM_Ikq0',
  },
  {
    id: "de6e5582-0714-4c5c-b20d-a6fe2a1971fd",
    chapterId : "44a42547-3b5a-4b77-a82f-7c22edde8e0e",
    title: "Interactive Visualization Tools",
    video: 'https://youtu.be/MiiANxRHSv4?si=Z7m3pxVe9RfD2Tzo',
  },
  {
    id: "b259bd65-c381-441f-82e4-f2a12336ca6a",
    chapterId : "44a42547-3b5a-4b77-a82f-7c22edde8e0e",
    title: "Creating Compelling Visual Stories",
    video: 'https://youtu.be/r8KZGpVns3o?si=6Nnk85sgUI2EwJBW',
  },



  {
    id: "e62c8fb8-ec2e-4ed0-95af-a39a7f832d86",
    chapterId : "643854cb-c41b-4769-a460-878647a89fdc",
    title: "Introduction to Machine Learning",
    video: 'https://youtu.be/ukzFI9rgwfU?si=iEG1Rv01uVkT7_c6',
  },
  {
    id: "66b43b2d-1d61-41c3-b9aa-2c3c9ca34b26",
    chapterId : "643854cb-c41b-4769-a460-878647a89fdc",
    title: "Types of Machine Learning",
    video: 'https://youtu.be/ukzFI9rgwfU?si=iEG1Rv01uVkT7_c6',
  },
  {
    id: "aa697cfb-207d-4e2f-9237-02343e3920af",
    chapterId : "643854cb-c41b-4769-a460-878647a89fdc",
    title: "Supervised Learning Techniques",
    video: 'https://youtu.be/ukzFI9rgwfU?si=iEG1Rv01uVkT7_c6',
  },

  
  {
    id: "3e727641-58f7-4a16-8218-bd6e69becef4",
    chapterId : "03969ad2-9080-4919-a92d-7d1cc8ab6e35",
    title: "Understanding UI vs. UX",
    video: 'https://youtu.be/zHAa-m16NGk?si=_6zqHduJHno9p1zp',
  },
  {
    id: "3d881ab2-f638-4309-b8d8-9d169ea44249",
    chapterId : "03969ad2-9080-4919-a92d-7d1cc8ab6e35",
    title: "Roles in UI/UX Design",
    video: 'https://youtu.be/zHAa-m16NGk?si=d2CmpOWFNgV19EeX',
  },
  {
    id: "585603d1-1232-455a-a89d-49db1e843f82",
    chapterId : "03969ad2-9080-4919-a92d-7d1cc8ab6e35",
    title: "Importance of User-Centered Design",
    video: 'https://youtu.be/zHAa-m16NGk?si=d2CmpOWFNgV19EeX',
  },



  {
    id: "874629b9-03cc-4ea6-be0c-73ad01ce0772",
    chapterId : "b69148d7-42e4-4061-bb56-3b6af0ac9f14",
    title: "Elements of UI Design",
    video: 'https://youtu.be/bnp8cEhHgY0?si=c7aZ2ekB2-gBk4cY',
  },
  {
    id: "d7926251-2b41-42fb-979c-f06dbf79c6f1",
    chapterId : "b69148d7-42e4-4061-bb56-3b6af0ac9f14",
    title: "Principles of Effective UI Design",
    video: 'https://youtu.be/NTmh8l-Xl4c?si=Z--j6ZJk_9_-jkS2',
  },



  {
    id: "0888d3c8-8685-4a73-9425-0d432683d566",
    chapterId : "d3e6ceb0-99aa-4116-ac48-49800f38fa4f",
    title: "Introduction to UX Design",
    video: 'https://youtu.be/55NvZjUZIO8?si=-21pGu3O7zX8hSor',
  },
  {
    id: "df952114-6982-4043-b8be-43b2225870e0",
    chapterId : "d3e6ceb0-99aa-4116-ac48-49800f38fa4f",
    title: "User-Centric Design Process",
    video: 'https://youtu.be/BTVLmf0Z6EY?si=x_Y5sK4kYpKfLWhT',
  },



  {
    id: "5d64831b-7b69-4be2-a85d-21e4da73fef7",
    chapterId : "827a77f3-18c3-49b7-bcb1-2e747c39c5cc",
    title: "Importance of Usability Testing",
    video: 'https://youtu.be/r45OT-DX-KI?si=iPjAKCDTZS1ymK8E',
  },
  {
    id: "a7fd1ebe-44f6-4cf9-be13-53c2c644eb70",
    chapterId : "827a77f3-18c3-49b7-bcb1-2e747c39c5cc",
    title: "Analyzing User Feedback",
    video: 'https://youtu.be/r45OT-DX-KI?si=iPjAKCDTZS1ymK8E',
  },



  {
    id: "39b62ebd-1876-49cd-b021-2eba8cbd18e1",
    chapterId : "53a8ced1-d6ae-42a5-b9c3-601a5f3c475a",
    title: "Understanding the Role of a Product Manager",
    video: 'https://youtu.be/CIfkA9JhYIw?si=2ZY3PGsek33cZsi1',
  },
  {
    id: "007f7535-2936-4e71-b723-b589b2bb429e",
    chapterId : "53a8ced1-d6ae-42a5-b9c3-601a5f3c475a",
    title: "Framework for Success",
    video: 'https://youtu.be/Q3ug5jzY3ZY?si=Pyc4lJFlfmfzcKfe',
  },
  {
    id: "0350f88f-385c-404d-9506-05e41b42f5cc",
    chapterId : "53a8ced1-d6ae-42a5-b9c3-601a5f3c475a",
    title: "Key Concepts in Product Management",
    video: 'https://youtu.be/88ZfjnDOmp4?si=eXUko41V_3HDc4pS',
  },



  {
    id: "9ba066a2-68ad-45c5-a75e-96c85e0f3d62",
    chapterId : "de97860d-4f0b-463c-b6ca-b2c4090cd436",
    title: "Types of Products",
    video: 'https://youtu.be/sOSsEyZmzlU?si=LFFtqqROkk5C82Dk',
  },
  {
    id: "2ac41043-86d1-4571-b057-1f02acfb93db",
    chapterId : "de97860d-4f0b-463c-b6ca-b2c4090cd436",
    title: "Business Model Canvas",
    video: 'https://youtu.be/QoAOzMTLP5s?si=7Wqy0qRZlWiEYipI',
  },
  {
    id: "a21788ca-2427-404f-85ac-c9f81c0d87bd",
    chapterId : "de97860d-4f0b-463c-b6ca-b2c4090cd436",
    title: "Product Master Plan",
    video: 'https://youtu.be/HQ6348u6o08?si=zGg25PRRLQnGeqZM',
  },



  {
    id: "0a8056b7-820f-4a2b-8df4-d2e028acbf60",
    chapterId : "668c5467-8bcb-46e9-934a-15482c14025c",
    title: "Strategic Planning",
    video: 'https://youtu.be/T0U0qxpxUCw?si=1dK23hp8Ppy9Amql',
  },
  {
    id: "26ee0e79-1f45-4740-a73b-a10b640d1188",
    chapterId : "668c5467-8bcb-46e9-934a-15482c14025c",
    title: "Identifying Business Opportunities",
    video: 'https://youtu.be/zQGYbW5ZjS0?si=PSJnP89s6NPW4Nrk',
  },
  {
    id: "1f5eea34-ad60-428a-b55a-693925804ff0",
    chapterId : "668c5467-8bcb-46e9-934a-15482c14025c",
    title: "Competitive Analysis",
    video: 'https://youtu.be/0KyCAcV_y7o?si=EC8hAS7JmZEGSgdg',
  },



  {
    id: "f8ae1001-c7f4-4fc3-ae93-5afb6cb4f4ea",
    chapterId : "6a183bc0-7c71-4e3e-80fb-b1d728e0a4ea",
    title: "Documentation and Requirements",
    video: 'https://youtu.be/2qlcY9LkFik?si=K-MwgPE51TLXKM5i',
  },
  {
    id: "f954e160-e1f7-49b4-b082-7d6cfa4330e6",
    chapterId : "6a183bc0-7c71-4e3e-80fb-b1d728e0a4ea",
    title: "Data Analysis for Decision-Making",
    video: 'https://youtu.be/kyNa3SdKU84?si=Us3QXmudYmsxhCWj',
  },
  {
    id: "6f66caac-2e7d-4627-ae46-e215a42ef12d",
    chapterId : "6a183bc0-7c71-4e3e-80fb-b1d728e0a4ea",
    title: "Risk Management",
    video: 'https://youtu.be/kyNa3SdKU84?si=Us3QXmudYmsxhCWj',
  },



  {
    id: "ed199dca-d0fb-4317-a7e9-a043f5b9e741",
    chapterId : "24b42aeb-8688-4321-9904-68025ea6a6a8",
    title: "Introduction to the Course",
    video: 'https://youtu.be/NLvaOL6Cm48?si=2nIwt9qEjRlwaKWY',
  },
  {
    id: "1ae8f878-1b02-4543-bf40-8e3956fbb7e3",
    chapterId : "24b42aeb-8688-4321-9904-68025ea6a6a8",
    title: "Prerequisites",
    video: 'https://youtu.be/4itSY0xkOqw?si=5Ddb2jfaPT7bHEye',
  },



  {
    id: "db11a161-1790-488a-a3d8-b5042906f79b",
    chapterId : "37b87ce4-5c8f-4f34-b267-eeed502e23fe",
    title: "Sharing and Working with Data",
    video: 'https://youtu.be/mJz5B6dsGrc?si=1HB-a44UxbBLpl17',
  },
  {
    id: "f2470c19-5690-496c-8f2a-c5177caae968",
    chapterId : "37b87ce4-5c8f-4f34-b267-eeed502e23fe",
    title: "Mobile and Web Development Expertise",
    video: 'https://youtu.be/5mR40TARMBg?si=wcDH19OKAlOvdX6S',
  },



  {
    id: "c6aeb9c9-9f79-4ae2-ae51-759936c0dc80",
    chapterId : "2b457ac7-5031-47a6-b67d-74fdbb402d81",
    title: "Course Selection",
    video: 'https://youtu.be/5mR40TARMBg?si=wcDH19OKAlOvdX6S',
  },
  {
    id: "75308250-18ff-429f-9c6d-8c95e538e6f2",
    chapterId : "2b457ac7-5031-47a6-b67d-74fdbb402d81",
    title: "Multi-Modular Architecture",
    video: 'https://youtu.be/5mR40TARMBg?si=wcDH19OKAlOvdX6S',
  },



  {
    id: "54f104c2-25e2-430f-a757-2f50a8b43a4e",
    chapterId : "41fd7073-e311-43bc-9167-8f7d2731e81b",
    title: "Making Your App Production-Ready",
    video: 'https://youtu.be/O3BVBzV58hg?si=QCv6wn2owvfuDGQB',
  },
  {
    id: "91dd28a1-b36c-4b30-bcaf-1f4bcef356ce",
    chapterId : "41fd7073-e311-43bc-9167-8f7d2731e81b",
    title: "Showcase of Advanced App Development",
    video: 'https://youtu.be/O3BVBzV58hg?si=QCv6wn2owvfuDGQB',
  },



  {
    id: "72a752e9-8c61-49dd-ba7f-58fed1a6e703",
    chapterId : "2b21b492-f091-4b16-8edc-3c0cf9200148",
    title: "Course Overview",
    video: 'https://youtu.be/Zu7E2VL2xa0?si=qQyotlwjQxZm_Zbs',
  },
  {
    id: "085915f9-cbd2-46fc-8993-368fa8712c4d",
    chapterId : "2b21b492-f091-4b16-8edc-3c0cf9200148",
    title: "Importance of iOS Development",
    video: 'https://youtu.be/B1Ccb_jzwCo?si=7iqXkeJt7b7Hv5sf',
  },



  {
    id: "4f5d89ce-4ac8-4d97-8c94-ae909407df9c",
    chapterId : "62fee671-126b-456f-9153-f3dbff650892",
    title: "Complete iOS App Development",
    video: 'https://youtu.be/cdtGTaoJfNY?si=dgBWh2f8Ey9mtJgs',
  },
  {
    id: "5f05666b-4bad-49a3-8e19-999e439c4010",
    chapterId : "62fee671-126b-456f-9153-f3dbff650892",
    title: "From Beginner to Advanced Developer",
    video: 'https://youtu.be/cdtGTaoJfNY?si=dgBWh2f8Ey9mtJgs',
  },



  {
    id: "32e98d66-c64f-4718-9192-68e057500cf8",
    chapterId : "c99b2a5c-8be3-4c96-89bf-a7e3f6b07203",
    title: "Course Selection",
    video: 'https://youtu.be/Yo4FBu8nQxA?si=j71K3aCGrg0C35DO',
  },
  {
    id: "e1339fe9-ef6c-4455-aff9-4574e53dd3a9",
    chapterId : "c99b2a5c-8be3-4c96-89bf-a7e3f6b07203",
    title: "Multi-Modular Architecture",
    video: 'https://youtu.be/nsZYYlDmj7o?si=KLZ606fdBCTvnFIs',
  },



  {
    id: "65dab264-34b0-49ea-a3c5-bea7d96b8757",
    chapterId : "d12395a1-3dae-4596-bbff-1e042cf4f0ba",
    title: "Developer Masterclass",
    video: 'https://youtu.be/Z7DAz-PFsU4?si=0_2-g7eHqXr96OAt',
  },
  {
    id: "32d8e6d6-aea2-48a8-a859-6c02e822a82e",
    chapterId : "d12395a1-3dae-4596-bbff-1e042cf4f0ba",
    title: "Turning Dreams into Reality",
    video: 'https://youtu.be/cdtGTaoJfNY?si=dbl6WubLIwbEWCKn',
  },



  {
    id: "f7471c58-6c75-4013-ab92-6e3b60d48c5d",
    chapterId : "165058cc-d4c0-42ba-8c21-d713a00df88c",
    title: "Introduction to Advanced Data Science",
    video: 'https://youtu.be/ua-CiDNNj30?si=88FuvUEvmosD_fX5',
  },
  {
    id: "4fefcca6-b97b-4bd6-97e8-0c16ebf0e0f4",
    chapterId : "165058cc-d4c0-42ba-8c21-d713a00df88c",
    title: "Key Concepts in Advanced Data Science",
    video: 'https://youtu.be/ua-CiDNNj30?si=88FuvUEvmosD_fX5',
  },
  {
    id: "a7f98278-dcd5-4889-bca0-b9b8770ab2f6",
    chapterId : "165058cc-d4c0-42ba-8c21-d713a00df88c",
    title: "Tools and Technologies",
    video: 'https://youtu.be/ua-CiDNNj30?si=88FuvUEvmosD_fX5',
  },



  {
    id: "2e178ebb-ed2f-45ec-ad58-90183bee570f",
    chapterId : "75b7ef74-a6cf-4fc3-8344-3609b6606f8e",
    title: "Deep Learning and Neural Networks",
    video: 'https://youtu.be/ua-CiDNNj30?si=88FuvUEvmosD_fX5',
  },
  {
    id: "e3c756a7-94e3-48cb-9ac4-93e6a8307782",
    chapterId : "75b7ef74-a6cf-4fc3-8344-3609b6606f8e",
    title: "Ensemble Learning",
    video: 'https://youtu.be/ua-CiDNNj30?si=88FuvUEvmosD_fX5',
  },
  {
    id: "db10e05c-41af-4d8b-a0d4-030d38e3ce7e",
    chapterId : "75b7ef74-a6cf-4fc3-8344-3609b6606f8e",
    title: "Reinforcement Learning",
    video: 'https://youtu.be/ua-CiDNNj30?si=88FuvUEvmosD_fX5',
  },



  {
    id: "01a7b441-c408-4500-bcce-7520a7a77b0d",
    chapterId : "2d811e8f-6035-4ee8-a9b3-17d02864b533",
    title: "Introduction to Big Data",
    video: 'https://youtu.be/bAyrObl7TYE?si=xvzimWtUgyOW_IFj',
  },
  {
    id: "5ece2323-f57e-43cd-9099-28d7a7a33720",
    chapterId : "2d811e8f-6035-4ee8-a9b3-17d02864b533",
    title: "Distributed Computing for Big Data",
    video: 'https://youtu.be/bAyrObl7TYE?si=xvzimWtUgyOW_IFj',
  },
  {
    id: "cd5e6300-99fc-44b6-9b3f-c687fc7cf11f",
    chapterId : "2d811e8f-6035-4ee8-a9b3-17d02864b533",
    title: "Advanced Data Processing Techniques",
    video: 'https://youtu.be/bAyrObl7TYE?si=xvzimWtUgyOW_IFj',
  },



  {
    id: "10c875ae-fd10-48ea-a893-a7e2263289c5",
    chapterId : "bf0b569e-4def-4583-85a5-52faf168a58a",
    title: "Predictive Analytics in Business",
    video: 'https://youtu.be/tdV9L3C-hxQ?si=mbge6XJifEdz-Bd4',
  },
  {
    id: "d4fa2aee-e904-4e85-bc68-3250c43c7ac3",
    chapterId : "bf0b569e-4def-4583-85a5-52faf168a58a",
    title: "Healthcare Analytics",
    video: 'https://youtu.be/tdV9L3C-hxQ?si=mbge6XJifEdz-Bd4',
  },
  {
    id: "21e25bd7-badc-4136-9d4d-faa1b1100ad5",
    chapterId : "bf0b569e-4def-4583-85a5-52faf168a58a",
    title: "Ethical Considerations in Advanced Data Science",
    video: 'https://youtu.be/s8qjmImu1LQ?si=Yk5yD-JXWGQ5D-8f',
  },




  {
    id: "0148661e-3221-413d-9a77-f4e66815667c",
    chapterId : "7590e494-ae6a-4978-908c-56bfb8d07d79",
    title: "Basics of User Interface Design",
    video: 'https://youtu.be/55NvZjUZIO8?si=82euKC7QtexbwBWK',
  },
  {
    id: "b2f2cbb1-9b0a-43e3-9aa4-64da1918591a",
    chapterId : "7590e494-ae6a-4978-908c-56bfb8d07d79",
    title: "Understanding User Experience",
    video: 'https://youtu.be/55NvZjUZIO8?si=82euKC7QtexbwBWK',
  },
  {
    id: "5a54b7a0-0add-40a1-89d1-323ce448d586",
    chapterId : "7590e494-ae6a-4978-908c-56bfb8d07d79",
    title: "Importance of Design Thinking",
    video: 'https://youtu.be/55NvZjUZIO8?si=82euKC7QtexbwBWK',
  },





  {
    id: "1627c247-7daf-4052-9a27-0ba2777d4141",
    chapterId : "807eb8a0-6be0-4cb6-8062-6a19297ea2c2",
    title: "Color Theory and Application",
    video: 'https://youtu.be/XNkV6m4fosw?si=g_QHRn77eetNbq_X',
  },
  {
    id: "bdff8ee7-ffa3-4ce3-8687-e1458c7bbfba",
    chapterId : "807eb8a0-6be0-4cb6-8062-6a19297ea2c2",
    title: "Typography in Design",
    video: 'https://youtu.be/XNkV6m4fosw?si=g_QHRn77eetNbq_X',
  },
  {
    id: "327993d5-7305-446c-8b08-6da054569cc3",
    chapterId : "807eb8a0-6be0-4cb6-8062-6a19297ea2c2",
    title: "Layout and Composition Techniques",
    video: 'https://youtu.be/XNkV6m4fosw?si=g_QHRn77eetNbq_X',
  },




  {
    id: "2dcd9c76-7413-43bb-9383-f7aaf3957824",
    chapterId : "477d8f1d-7bb7-4fab-ad68-88dbd8f551c2",
    title: "Interactive Prototyping with Figma",
    video: 'https://youtu.be/CNQ_N7Pvyag?si=1N-JxhKMdqDZemgh',
  },
  {
    id: "d011d22c-c540-408d-aade-0ffa1f4013f9",
    chapterId : "477d8f1d-7bb7-4fab-ad68-88dbd8f551c2",
    title: "Animation and Microinteractions",
    video: 'https://youtu.be/CNQ_N7Pvyag?si=1N-JxhKMdqDZemgh',
  },
  {
    id: "1b227ab5-de89-4ce2-ac3b-f97603c26c4c",
    chapterId : "477d8f1d-7bb7-4fab-ad68-88dbd8f551c2",
    title: "Responsive Design Strategies",
    video: 'https://youtu.be/CNQ_N7Pvyag?si=1N-JxhKMdqDZemgh',
  },




  {
    id: "3e7f3e99-b9ca-46f5-85e3-7ccddb79cfeb",
    chapterId : "990b17ef-f57d-4b12-b3b1-4e61ce47b39b",
    title: "Interactive Prototyping with Figma",
    video: 'https://youtu.be/CNQ_N7Pvyag?si=1N-JxhKMdqDZemgh',
  },
  {
    id: "cc45c7b1-851c-417b-b659-7c60ff34439a",
    chapterId : "990b17ef-f57d-4b12-b3b1-4e61ce47b39b",
    title: "Animation and Microinteractions",
    video: 'https://youtu.be/CNQ_N7Pvyag?si=1N-JxhKMdqDZemgh',
  },
  {
    id: "c224f456-ac0e-4554-b30e-3a06577c78ec",
    chapterId : "990b17ef-f57d-4b12-b3b1-4e61ce47b39b",
    title: "Responsive Design Strategies",
    video: 'https://youtu.be/CNQ_N7Pvyag?si=1N-JxhKMdqDZemgh',
  },




  {
    id: "7c3cae74-8245-43c3-85fd-77475329a97b",
    chapterId : "7caa20ee-a659-4d93-886c-a31f91e6b835",
    title: "Fundamentals of Product Management",
    video: 'https://youtu.be/lF70OuNWdrM?si=0GzNEDvMo9cPoFiI',
  },
  {
    id: "05a26a15-8182-4f96-a395-6352efc03b98",
    chapterId : "7caa20ee-a659-4d93-886c-a31f91e6b835",
    title: "Role of a Product Manager",
    video: 'https://youtu.be/lF70OuNWdrM?si=0GzNEDvMo9cPoFiI',
  },




  {
    id: "f73ff42c-442d-4101-92be-3b59f6c596ac",
    chapterId : "9ff8cb7b-dee7-48c7-9e9f-d82404420acd",
    title: "Developing Effective Product Strategies",
    video: 'https://youtu.be/IAZuO8_LNxY?si=ONgvZcs65w13v8S9',
  },
  {
    id: "0d5af398-a578-439e-8a4a-1ade0a60fca4",
    chapterId : "9ff8cb7b-dee7-48c7-9e9f-d82404420acd",
    title: "Implementing Product Roadmaps for Success",
    video: 'https://youtu.be/o8Zi8yvgD9k?si=ZJFxJb8UmWkhA2MG',
  },




  {
    id: "2454a921-4c83-46e0-8fb3-ee928f5ad64a",
    chapterId : "13a793c5-0d7e-4fca-ae31-54284d57c3fc",
    title: "Getting Started with Go",
    video: 'https://youtu.be/yyUHQIec83I?si=CSTvVDyMit7koygF',
  },
  {
    id: "572a53f2-e45a-4c00-bf4f-c84714c455e7",
    chapterId : "13a793c5-0d7e-4fca-ae31-54284d57c3fc",
    title: "Basic Syntax and Data Types",
    video: 'https://youtu.be/yyUHQIec83I?si=CSTvVDyMit7koygF',
  },




  {
    id: "d46728f4-c21b-4722-9643-056d4aa20fd6",
    chapterId : "8a838fbb-9aa8-4c2d-b1cc-811d92f4c443",
    title: "Control Flow and Functions",
    video: 'https://youtu.be/yyUHQIec83I?si=CSTvVDyMit7koygF',
  },
  {
    id: "eeaf6d11-e604-4e40-acdc-d14a5bd9ceb9",
    chapterId : "8a838fbb-9aa8-4c2d-b1cc-811d92f4c443",
    title: "Structs and Interfaces",
    video: 'https://youtu.be/yyUHQIec83I?si=CSTvVDyMit7koygF',
  },




  {
    id: "03b3dab0-4098-453f-acd1-e82e88e467d0",
    chapterId : "8367edae-a839-46a3-81b8-963e489acea5",
    title: "Overview of Advanced iOS Concepts",
    video: 'https://youtu.be/pbhLZMVBlp0?si=XpKxKGAiKWN89KeH',
  },
  {
    id: "52ed95be-d948-425d-9464-44918a2e578f",
    chapterId : "8367edae-a839-46a3-81b8-963e489acea5",
    title: "Mastering Swift",
    video: 'https://youtu.be/pbhLZMVBlp0?si=XpKxKGAiKWN89KeH',
  },




  {
    id: "883444aa-28ef-4d6c-bf76-062d75907a85",
    chapterId : "caab2bc4-d4b2-43e1-9993-3c4b78be1ab6",
    title: "Advanced Interface Builder Techniques",
    video: 'https://youtu.be/Ud07w6CV-vc?si=_0cnM6rqZMCUMdwz',
  },
  {
    id: "67c02b3b-696a-4e7d-8a9d-66ff966a6cc1",
    chapterId : "caab2bc4-d4b2-43e1-9993-3c4b78be1ab6",
    title: "Animation and Gestures",
    video: 'https://youtu.be/Ud07w6CV-vc?si=_0cnM6rqZMCUMdwz',
  },




  {
    id: "4ea21825-b4da-4698-b90b-0d88b1b577bb",
    chapterId : "8a907f62-4b0f-4aa1-aa06-1e6c20d33565",
    title: "Principles of Product Management",
    video: 'https://youtu.be/4o7Shzg344g?si=TKBVd-llHNcY5dGZ',
  },
  {
    id: "47848450-c7d3-4d16-973d-56793e006e5a",
    chapterId : "8a907f62-4b0f-4aa1-aa06-1e6c20d33565",
    title: "Agile Methodology in Product Management",
    video: 'https://youtu.be/4o7Shzg344g?si=TKBVd-llHNcY5dGZ',
  },




  {
    id: "64960677-d0a5-4e3f-b3fa-3b2ca523bd90",
    chapterId : "671012b9-d3bd-4b07-a848-4c8247c3d4c4",
    title: "Market Research Strategies",
    video: 'https://youtu.be/4o7Shzg344g?si=TKBVd-llHNcY5dGZ',
  },
  {
    id: "1ac6dc89-31f3-4507-aaaa-68fcc43f85be",
    chapterId : "671012b9-d3bd-4b07-a848-4c8247c3d4c4",
    title: "User-Centric Design",
    video: 'https://youtu.be/4o7Shzg344g?si=TKBVd-llHNcY5dGZ',
  },




  {
    id: "a378cd9e-6172-4b31-b7f6-6accbe2d5692",
    chapterId : "05118b72-2034-4535-9738-ce7293e6790b",
    title: "Introduction to UI/UX Design",
    video: 'https://youtu.be/55NvZjUZIO8?si=KSpBpyFvWnzKdWwN',
  },
  {
    id: "c8c242af-ca1c-4211-a57a-05425a2a913b",
    chapterId : "05118b72-2034-4535-9738-ce7293e6790b",
    title: "Mobile User Behavior Analysis",
    video: 'https://youtu.be/QELMyMQseA0?si=K5UTEVRbBfnHD3kM',
  },




  {
    id: "2ee9d011-9222-4d94-b686-1b557df343c9",
    chapterId : "d3f89243-3b60-4a2c-8635-a07636dbd30a",
    title: "Wireframing Essentials",
    video: 'https://youtu.be/7rw1tZwrccU?si=x7RrIbFJsuK6oE7M',
  },
  {
    id: "f773660c-ee53-4dbf-af98-06df100f0ec5",
    chapterId : "d3f89243-3b60-4a2c-8635-a07636dbd30a",
    title: "Prototyping for User Validation",
    video: 'https://youtu.be/u5QNAuA7j6k?si=PtClpSuVl49C1crn',
  },




  {
    id: "c77b01b0-2b62-4dfd-89ae-5c5c1f293244",
    chapterId : "c154f37b-58da-4a8e-b912-194f90f76e5f",
    title: "Data Exploration and Preprocessing",
    video: 'https://youtu.be/x08AN87G0mg?si=wFwUsdgUml-VrRwq',
  },
  {
    id: "5508a580-ee59-4b4b-b334-0a27707fb721",
    chapterId : "c154f37b-58da-4a8e-b912-194f90f76e5f",
    title: "Statistical Analysis in Data Science",
    video: 'https://youtu.be/Lv0xcdeXaGU?si=quvsBs5EgxtXBzQE',
  },




  {
    id: "6c0462dd-d801-4c93-8e4f-aa1fadc7eb03",
    chapterId : "47d6956a-78b0-4a07-8de3-c3cc829bd315",
    title: "Supervised Learning for Predictive Modeling",
    video: 'https://youtu.be/Cx8Xie5042M?si=5Mo-yv35Zb_0Da4E',
  },
  {
    id: "473ffcf8-96e8-49ae-b863-d812e83378eb",
    chapterId : "47d6956a-78b0-4a07-8de3-c3cc829bd315",
    title: "Unsupervised Learning for Pattern Discovery",
    video: 'https://youtu.be/Cx8Xie5042M?si=5Mo-yv35Zb_0Da4E',
  },




  {
    id: "5e556d6d-c405-49b1-b726-8e0b66e29c1c",
    chapterId : "85c5b972-31d8-49cd-aeaa-caf55990c2b1",
    title: "HTML and CSS Fundamentals",
    video: 'https://youtu.be/G3e-cpL7ofc?si=i_JB7kKjGAKZOI5E',
  },
  {
    id: "5f384e29-a853-4972-bf19-d7c96d3df765",
    chapterId : "85c5b972-31d8-49cd-aeaa-caf55990c2b1",
    title: "JavaScript for Interactivity",
    video: 'https://youtu.be/LFa9fnQGb3g?si=By17V1vfRuUvxU_O',
  },




  {
    id: "7e891de7-4386-4cea-a3e0-953b51f0082b",
    chapterId : "e971d758-af7a-4b80-b374-6974632ebbad",
    title: "Server-Side Scripting with Node.js",
    video: 'https://youtu.be/7GRKUaQ8Spk?si=Al9H0Nmztp6Jn86f',
  },
  {
    id: "a49f32e8-99cd-46cc-8541-7da3cfab3b17",
    chapterId : "e971d758-af7a-4b80-b374-6974632ebbad",
    title: "Database Integration with MongoDB",
    video: 'https://youtu.be/gGNquGHqpNI?si=fPpVegCk8qWxXW1y',
  },




  {
    id: "53af7949-bca3-4bd3-969d-99f9b44e1efb",
    chapterId : "3b70b70b-11ec-4c2f-b0c8-6c5da1129f1c",
    title: "Firebase Authentication and Authorization",
    video: 'https://youtu.be/vBUk293QSKY?si=RbXYHltJ8aQZVOTH',
  },
  {
    id: "de789176-3a3e-4e3e-96d5-c02d19f5b88f",
    chapterId : "3b70b70b-11ec-4c2f-b0c8-6c5da1129f1c",
    title: "Cloud Firestore Database Integration",
    video: 'https://youtu.be/TW02hwhBvo4?si=detHKkmXVPBmewSf',
  },




  {
    id: "c29a7448-c6d7-47e8-9625-9334318150ee",
    chapterId : "6183c09e-3de0-4df3-a6f1-ff80f9bd6d7f",
    title: "Firebase Cloud Functions",
    video: 'https://youtu.be/vr0Gfvp5v1A?si=eyRyQ82ozqa81RM_',
  },
  {
    id: "97062571-04d6-4dbc-9f05-40a04cfd1b9d",
    chapterId : "6183c09e-3de0-4df3-a6f1-ff80f9bd6d7f",
    title: "Hosting Your Android App",
    video: 'https://youtu.be/V3z97mWuvmA?si=cJby-gYqjwkucTKA',
  },




  {
    id: "ec123e9f-6a06-472e-94e5-025860d4d493",
    chapterId : "7dbb2772-bf79-4f3d-9b7b-f256f4b0b91d",
    title: "Advanced Kotlin Language Features",
    video: 'https://youtu.be/EExSSotojVI?si=s3LctVVcAUdp9gQH',
  },
  {
    id: "594508e9-8e4a-4d1b-8348-3dcaf5f33dd1",
    chapterId : "7dbb2772-bf79-4f3d-9b7b-f256f4b0b91d",
    title: "Building UI with Kotlin and XML",
    video: 'https://youtu.be/EExSSotojVI?si=s3LctVVcAUdp9gQH',
  },




  {
    id: "d1ccab90-1c36-4c19-b799-f14a8d8d9bd6",
    chapterId : "41f71ae5-3779-4e95-8394-810373f5e4c0",
    title: "Model-View-ViewModel (MVVM) Architecture",
    video: 'https://youtu.be/lmRzRKIsn1g?si=27_qpf5ORw4t4iWr',
  },
  {
    id: "79be5169-b2f4-4772-b135-8128ea695bda",
    chapterId : "41f71ae5-3779-4e95-8394-810373f5e4c0",
    title: "Dependency Injection with Dagger and Hilt",
    video: 'https://youtu.be/lmRzRKIsn1g?si=27_qpf5ORw4t4iWr',
  },


]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const moduleChapter = modules.map((module)=> ({
      id: module.id,
      chapterId: module.chapterId,
      title: module.title,
      video: module.video,
      createdAt : new Date(),
      updatedAt : new Date()
    }))

      await queryInterface.bulkInsert('courseChapterModules', moduleChapter)
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
