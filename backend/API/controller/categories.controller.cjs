const bd = require('../../bd.cjs');
class categoriesController {
    async createCategories(req, res) {
        const { name_CreateCategories, description_CreateCategories } = req.body;
        const newCategories = await bd.query('INSERT INTO categories ( name, description ) values ($1, $2) RETURNING *', [name_CreateCategories, description_CreateCategories]);
        res.json(newCategories.rows);
    }
    async getCategories(req, res) {
        const categories = await bd.query('SELECT * FROM categories');
        res.json(categories.rows);
    }
    async getOneCategories(req, res) {
        const categories_id = req.params.categories_id;
        const categories = await bd.query('SELECT * FROM categories WHERE categories_id = $1', [categories]);
        res.json(categories.rows);
    }
    async updataCategories(req, res) {
        const { name_Updata, description_Updata, categories_id_Updata } = req.body;
        const categories = await bd.query('UPDATE categories SET name = $1, description = $2 WHERE categories_id = $3 RETURNING *', [name_Updata, description_Updata, categories_id_Updata]);
        res.json(categories.rows);
    }
    async deleteCategories(req, res) {
        const categories_id = req.params.categories_id_id;
        const categories = await bd.query('DELETE FROM categories WHERE categories_id = $1', [categories_id]);
        res.json(categories.rows);
    }
}

module.exports = new categoriesController();