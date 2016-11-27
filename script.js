(function(){	
		
		var todo = document.querySelector('#list'),// список
			add = document.querySelector('#add'), // кнопка добавить
			field = document.querySelector('#toDoItem'); // инпут
			hide = document.getElementById('hide-all'), // глаз спрятать все зачеркнутые
			isDone = document.getElementsByClassName('todo done'), // зачеркнутая заметка
			dellNotes = document.querySelector('#delete-all'), // корзина удалить все зачеркнутые
			notes = document.getElementsByClassName('close'), // крестик удалтиь
			todos_count = 0;
			
			// создание нового эллемента списка
			function getDomElement(id, text) {
			  
			  var li = document.createElement('LI');
			  li.className = "todo";
			  li.id = id;
			  li.appendChild(document.createTextNode(text));
			  
			  var span = document.createElement('SPAN');
			  
			  var a_check = document.createElement('A');
			  a_check.href = '#';
			  a_check.className = 'check';
			  a_check.addEventListener('click', function(e) {
			    document.getElementById(id).classList.toggle('done');
			    e.preventDefault();
			  }, false);
			  
			  var i_check = document.createElement('I');
			  i_check.className = 'fa fa-check fa-lg';
			  a_check.appendChild(i_check);
			  
			  var a_del = document.createElement('A');
			  a_del.href = '#';
			  a_del.className = 'delete-todo';
			  a_del.addEventListener('click', function(e) {
			    document.getElementById(id).remove();
			    e.preventDefault();
			  }, false);
			  
			  var i_del = document.createElement('I');
			  i_del.className = 'fa fa-trash-o fa-lg';
			  a_del.appendChild(i_del);
			  span.appendChild(a_check);
			  span.appendChild(a_del);
			  li.appendChild(span);
			  return li;
			}
		
		// создание новог отаска

		add.addEventListener('click', function(e) { 
		  var text = field.value;
		  if (text !== '') {
		    todo.appendChild(getDomElement(++todos_count,text));
		    field.value = '';
		    field.focus();
		  }
		  e.preventDefault();
		}, false);
		
		// прячем все выполненные таски
	
		function hideAllNotes() {
		  	for (var i = 0; i < isDone.length; i++) {
		    	var doneTask = isDone[i];
		   		doneTask.classList.toggle('hide');
		  	}
		}

		hide.addEventListener('click', hideAllNotes);
		
		// удаление всех выполненных тасков
		
		function deleteAllDoneTasks() {  
			while (isDone.length > 0) {
				isDone[0].remove(isDone);
			}
		}
		
		dellNotes.addEventListener('click', deleteAllDoneTasks);

    })();