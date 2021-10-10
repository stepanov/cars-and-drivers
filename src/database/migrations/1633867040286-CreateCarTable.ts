import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class CreateCarTable1633867040286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'plate_number',
            type: 'varchar',
          },
          {
            name: 'brand',
            type: 'varchar',
          },
          {
            name: 'note',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'datetime',
          },
          {
            name: 'updated_at',
            type: 'datetime',
          },
        ],
      }),
      true,
    );
    await queryRunner.createIndex(
      'drivers',
      new TableIndex({
        name: 'IDX_CAR_PLATE_NUMBER',
        columnNames: ['plate_number'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('cars', 'IDX_CAR_PLATE_NUMBER');
    await queryRunner.dropTable('cars');
  }
}
