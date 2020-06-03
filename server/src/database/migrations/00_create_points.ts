import Knex from 'knex'; // Os tipos não primitivos de dados geralmente colocamos a 1ª letra maiúscula

// CRIAR A TABELA
export async function up (knex: Knex) {
    return knex.schema.createTable('points', (table) => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

// VOLTAR ATRÁS (DELETAR A TABELA)
export async function down (knex: Knex) {
    return knex.schema.dropTable('points');
}