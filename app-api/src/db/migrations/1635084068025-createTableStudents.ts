import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableStudents1635084068025 implements MigrationInterface {

  private table = new Table({
    name: 'students',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: 'increment'
      },
      {
        name: 'name',
        type: 'varchar',
        length: '255',
      },
      {
        name: 'cpf',
        type: 'varchar',
        length: '11',
      },
      {
        name: 'email',
        type: 'varchar',
        length: '255',
      }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table)
  }

}
