import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateDriverTable1633848292906 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'drivers',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'phone',
            type: 'varchar',
          },
          {
            name: 'note',
            type: 'varchar',
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      'drivers',
      new TableIndex({
        name: 'IDX_DRIVER_EMAIL',
        columnNames: ['email'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('email', 'IDX_DRIVER_EMAIL');
    await queryRunner.dropTable('drivers');
  }
}
