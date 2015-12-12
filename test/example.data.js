'use strict';

exports.config = {
    mode: 'test',
    credentials: {
        securenetId: process.env.SECURENET_ID,
        securenetKey: process.env.SECURENET_KEY
    },
    developerApplication: {
        developerId: 12345678,
        Version: '1.2'
    }
};

exports.customer = {
    firstName: 'Test',
    lastName: 'Tester',
    phoneNumber: '512-122-1211',
    emailAddress: 'some@emailaddress.com',
    sendEmailReceipts: true,
    notes: 'This is test notes',
    address: {
        line1: '123 Main St.',
        city: 'Austin',
        state: 'TX',
        zip: '78759'
    },
    company: 'Test company',
    userDefinedFields: [{
        udfname: 'udf1',
        udfvalue: 'udf1_value'
    }, {
        udfname: 'udf2',
        udfvalue: 'udf2_value'
    }, {
        udfname: 'udf3',
        udfvalue: 'udf3_value'
    }, {
        udfname: 'udf4',
        udfvalue: 'udf4_value'
    }]
};

exports.userDefinedFields = [{
    udfname: 'udf1',
    udfvalue: 'udf1_value'
}, {
    udfname: 'udf2',
    udfvalue: 'udf2_value'
}, {
    udfname: 'udf3',
    udfvalue: 'udf3_value'
}, {
    udfname: 'udf4',
    udfvalue: 'udf4_value'
}];

exports.card = {
    number: '4444 3333 2222 1111',
    expirationDate: '04/2016',
    address: {
        line1: '123 Main St.',
        city: 'Austin',
        state: 'TX',
        zip: '78759'
    },
    firstName: 'Jack',
    lastName: 'Test'
};

exports.check = {
	name: 'John Smith',
	routingNumber: 222371863,
	accountNumber: 123456
};

exports.extendedInformation = {
	typeOfGoods: 'PHYSICAL'
};