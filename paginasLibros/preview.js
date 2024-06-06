// const id = 1;
        // Función para cargar el JSON
        async function loadBooks() {
            try {
                const response = await fetch('libros.json');
                const books = await response.json();
                displayBooks(books);
            } catch (error) {
                document.write("Error al cargar el libro")
                console.error('Error loading books:', error);
            }
        }

        // Función para mostrar los libros en el HTML
        function displayBooks(books) {
            const container = document.getElementById('books-container');
            books.forEach(book => {
                const bookElement = document.createElement('div');
                if(id == book.id){
                    
                    bookElement.className = 'book';
                    bookElement.innerHTML = `
                    <h2>${book.titulo}</h2>
                    <p><strong>Autor:</strong> ${book.autor}</p>
                        
                    <p><iframe src=${book.url} width="100%" height="780px"></iframe></p>
                        
                    `;
                }
                
                container.appendChild(bookElement);
            });
        }

        // Cargar y mostrar los libros al cargar la página
        loadBooks();