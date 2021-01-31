To run the project enter "yarn && yarn dev"

DOCUMENTATION
-
- **POST** `/tasks`
    - Ao receber body conforme indicado deve criar nova task no banco e retornar 201 com json indicado

        Request Body

        ```jsx
        {
        	"name": "Comprar leite",
        }, 
        ```

        Response Body

        ```jsx
        {
        	"id": 1
        	"name": "Comprar leite",
        	"isChecked": false,
        	"labels": []
        }, 
        ```

    - Caso o body esteja incorreto, deve retornar 422.
- **GET** `/tasks`
    - Retorna todas as tasks labels no formato abaixo

        ```jsx
        [
        {
        	"id": 1,
        	"name": "Comprar leite",
        	"isChecked": false,
        	"labels": [
        		{
        			"id": 2,
        			"color": "#FF2255"
        		},
        		{
        			"id": 3,
        			"color": "#FF0055"
        		},
        	]
        ```

- **PUT** `/tasks/:id`
    - Deve atualizar uma task no banco conforme body indicado e retornar 200 task atualizada. Nem `name`, nem `isChecked` são required.

        Request Body

        ```jsx
        {
        	"name": "Task com nome atualizado"
        	"isChecked": true,
        }
        ```

        Request Response

        ```jsx
        {
        	"id": 1,
        	"name": "Task com nome atualizado"
        	"isChecked": true,
        }
        ```

    - Deve retornar 404 se task não existir
    - Caso o body esteja incorreto, deve retornar 422.
- **DELETE** `/tasks/:id`
    - Deve remover task com id apontado na rota se task existir e retornar 200
    - Deve retornar 404 se task não existir

- **POST** `/labels`
    - Ao receber body com o formato indicado, deve criar uma nova label no banco e retornar 201 com a nova label

        Request Body

        ```jsx
        {
        	"color": "#AA0255"
        }
        ```

        Response Body

        ```jsx
        {
        	"id": 4,
        	"color": "#AA0255"
        }
        ```

    - Caso o body esteja incorreto, deve retornar 422.
- **GET** `/labels`
    - Deve retornar todos os labels disponíveis no formato indicado

        Response Body

        ```jsx
        [
        	{
        		"id": 1,
        		"color": "#FF2255"
        	},
        	{
        		"id": 2,
        		"color": "#FF0055"
        	},
        ]
        ```

- **POST** `/tasks/:taskId/labels/:labelId`
    - Deve atribuir uma label de id `labelId` a uma task de id `taskId` se a label não estiver sido atribuita. Retorna 200 e a lista de labels da tarefa atualizada.

        ```sql
        [
        	{
        		"id": 1,
        		"color": "#FF2255"
        	},
        	{
        		"id": 2,
        		"color": "#FF0055"
        	}
        ]
        ```

    - Deve remover uma label de id `labelId` a uma task de id `taskId` se a label não estiver sido atribuita. Retorna 200.
    - Deve retornar 404 se label ou task não existirem.
