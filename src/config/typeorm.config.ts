import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'clamores',
    password: 'h1711379',
    database: 'NEST_Task_Managment',
    autoLoadEntities: true,
    synchronize: true,
}