import Knex from 'knex'; // Os tipos não primitivos de dados geralmente colocamos a 1ª letra maiúscula

// CRIAR A TABELA
export async function up (knex: Knex) {
    return knex.schema.createTable('point_items', (table) => {
        table.increments('id').primary();
        table.integer('point_id').notNullable().references('id').inTable('points');
        table.integer('item_id').notNullable().references('id').inTable('items');
    });
}

// VOLTAR ATRÁS (DELETAR A TABELA)
export async function down (knex: Knex) {
    return knex.schema.dropTable('point_items');
}