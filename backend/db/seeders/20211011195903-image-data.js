'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Images', [

    { listingId: 1, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set1/a63e95dd-18ef-455d-ba68-bab023ee384f.webp' },
    { listingId: 1, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set1/6d0bd4e2-7ac7-49d3-adbb-39f8d76b654f.webp' },
    { listingId: 1, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set1/6542fdd9-5c43-4195-b42d-b6cc19647d81.webp' },
    { listingId: 1, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set1/29647007-979c-4b4d-9697-eea8884eb839.webp' },
    { listingId: 1, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set1/2748fc8f-1d48-4814-b41d-e99e211987dc.webp' },
 
    { listingId: 2, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set2/da4d6286-e410-461b-9c3b-f553a5b4e2c1.webp' },
    { listingId: 2, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set2/e2306df1-e88b-4e1c-8934-aa8b1d8fe65b.webp' },
    { listingId: 2, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set2/afa9107f-eac9-4e1b-9bbf-da3dbe7af2f5.webp' },
    { listingId: 2, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set2/6d42e74c-5019-4659-830d-3ae681dd2325.webp' },
    { listingId: 2, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set2/651fe624-9a79-4280-9f8a-0004ee201019.webp' },
 
    { listingId: 3, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set3/33a590a2-342b-4ce7-9276-791e42316a99.webp' },
    { listingId: 3, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set3/3a7e1693-540e-4bb9-9bb0-6da79a9e5823.webp' },
    { listingId: 3, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set3/737d96f7-668a-4dc5-bd74-90a0ad4e2fa1.webp' },
    { listingId: 3, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set3/97a8d06f-f81f-425d-8546-3cf0d50a32ef.webp' },
    { listingId: 3, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set3/d398f1b7-5254-4f2b-9cdb-0135c79184c1.webp' },
 
    { listingId: 4, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set4/d609c85d-1d3d-43a1-b229-26b7f8c8c935.webp' },
    { listingId: 4, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set4/fee23fe4-d43d-4646-86c5-2e2186b72ef6.webp' },
    { listingId: 4, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set4/87538528-f168-4d98-9087-28d1194fcc6e.webp' },
    { listingId: 4, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set4/85036262-772e-436a-86a0-bf3e50af4d34.webp' }, 
    { listingId: 4, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set4/0ffd9997-02d4-490e-956b-2f280ecacf2e.webp' },

    { listingId: 5, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set5/0e5fef5b-0d01-4abe-a71f-cecd4e53f259.webp' },
    { listingId: 5, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set5/17cba420-2047-4770-96b8-2a64b70dd57c.webp' },
    { listingId: 5, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set5/66b435ba-dbe0-496d-81b2-17e2bfde0316.webp' },
    { listingId: 5, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set5/7a6a3a2a-d44a-44ad-85ac-a65bca7f3e64.jpeg' },
    { listingId: 5, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set5/878e627b-f927-488a-a93f-e15d925c8bed.jpeg' },

    { listingId: 6, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set6/358cd9cd-39fd-4664-b411-8e5fa25c049d.webp' },
    { listingId: 6, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set6/9c26f482-bc5e-4d0a-9088-6458b4c2fd12.webp' },
    { listingId: 6, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set6/f058ae76-07ae-4e88-b266-15ca48277df2.webp' },
    { listingId: 6, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set6/39c6f7d4-e6d2-4751-8fa1-fc5c43b3898a.webp' },
    { listingId: 6, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set6/017c6b24-8fbd-48e2-97c4-92db659ad0c3.webp' },

    { listingId: 7, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set7/52d650d5-f812-45d0-96d8-ee6f6d613d5e.webp' },
    { listingId: 7, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set7/a67f69fc_original.webp' },
    { listingId: 7, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set7/8d815644-03ba-4f81-9085-dccf67c073e6.webp' },
    { listingId: 7, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set7/4e8225c0-4fac-4c23-9823-574699b0c15c.webp' },
    { listingId: 7, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set7/a67f69fc_original+(1).webp' },

    { listingId: 8, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set8/2a5789c6-efc9-4710-af26-fc8f88a2f8ff.webp' },
    { listingId: 8, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set8/fb1e4a3a-b366-469f-9ede-102f411b6111.webp' },
    { listingId: 8, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set8/aad24a82-44fb-4509-8b5f-bf5a36528f3f.webp' },
    { listingId: 8, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set8/555455a0-4db8-44cb-9e86-629b76943c11.webp' },
    { listingId: 8, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set8/0ed5c082-14ba-4b3d-9957-b70cb1805a63.webp' },

    { listingId: 9, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set9/660dbbca-abb1-4152-9b7c-d7b189710344+(1).webp' },
    { listingId: 9, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set9/aeeb8b9a-a454-4459-ad06-366c09023509.jpeg' },
    { listingId: 9, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set9/c8e3bc71-2b47-417e-867a-946e4fe17205.webp' },
    { listingId: 9, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set9/660dbbca-abb1-4152-9b7c-d7b189710344.webp' },
    { listingId: 9, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set9/f96d2eec-12b5-45e5-bdfe-fa00b1860375.jpeg' },

    { listingId: 10, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set10/25171b67-680d-4d62-8808-e213af916772.webp' },
    { listingId: 10, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set10/7464fcc5-ec24-4da2-9912-75e579c462cc.webp' },
    { listingId: 10, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set10/8be55cb0-8e54-46a3-8adf-a6a242f2122f.webp' },
    { listingId: 10, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set10/afd00a9c-ecca-4ac7-be10-593fec4ce613.webp' },
    { listingId: 10, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set10/c78db55c-ae67-43eb-aaab-b5b0cc0ccbbe.webp' },

    { listingId: 11, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set11/f56e54f3-e293-40ea-9793-7ed6f7258cd4.webp' },
    { listingId: 11, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set11/ae914d36-ba76-48ca-87f0-5e2bce5d81cd.webp' },
    { listingId: 11, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set11/36020f21-d041-40d1-9dc3-c2fddad5eb2d.webp' },
    { listingId: 11, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set11/306b1136-7ed0-4b40-942b-3cf7643d1a15.jpeg' },
    { listingId: 11, url: 'https://nycbb.s3.amazonaws.com/nycbb+pics/set11/131b5a08-1701-4136-9cbc-5c2fe9a64587.webp' },

    { listingId: 12, url: 'https://thumbs.nestseekers.com/PeFxf068YIfxL7I.jpg' },
    { listingId: 12, url: 'https://thumbs.nestseekers.com/PeFsycL1NSaGF6n.jpg' },
    { listingId: 12, url: 'https://thumbs.nestseekers.com/PeFsycsxMPrx8gw.jpg' },
    { listingId: 12, url: 'https://thumbs.nestseekers.com/Pdx1OyL8ZeJv4Z9.jpg' },
    { listingId: 12, url: 'https://thumbs.nestseekers.com/PeFxf068YIfxL7I.jpg' }, 

    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Images', null, { truncate: true, cascade: true, restartIdentity: true });
  }  
};
