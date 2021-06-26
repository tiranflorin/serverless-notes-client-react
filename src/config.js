const config = {
    s3: {
        REGION: "eu-central-1",
        BUCKET: "notes-app-upload-flt",
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://28w5boauec.execute-api.eu-central-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_zSXEgMjy4",
        APP_CLIENT_ID: "7k8e4h5fr56tug0i9jukrd4sn",
        IDENTITY_POOL_ID: "eu-central-1:1c4fd5ed-39dd-4be8-993b-db8a3f079bb0",
    },
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IxcI4CttQl3sWz2aHkG6fOYZALcuvXwZc7HXdhHCP7eKdV0E3eTyMYm7eo3upYu4L6iNssyWeGidcH6x3HGwEZw004u0jygaU",
};

export default config;
