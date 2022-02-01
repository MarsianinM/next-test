import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';

import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';

import {configModule} from './configure.root';
import {TokenModule} from './token/token.module';
import {MailModule} from './mail/mail.module';
import {CategoryModule} from "./category/category.module";
import {ProductModule} from "./product/product.module";

@Module({
    imports: [
        UserModule,
        AuthModule,
        configModule,
        MongooseModule.forRoot(
            process.env.MONGODB_WRITE_CONNECTION_STRING,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        ),
        TokenModule,
        MailModule,
        CategoryModule,
        ProductModule,
    ],
})
export class AppModule {
}
