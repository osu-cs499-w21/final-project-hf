import React, { useState } from 'react';
import { Col, Row, TextInput } from 'src/components';
import { useRouter } from 'next/router';

export type AddTodoFn = (todo: string) => void;

export const TodoForm: React.FC<{ addTodo: AddTodoFn }> = ({ addTodo }) => {
  const [todo, setTodo] = useState('');
  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      //console.log(todo); //This should be entered string
      addTodo(todo);
      setTodo('');
      const ticker = todo;
      console.log('Should be the same as the entered TODO:', ticker);

      router.push(`/searchResults/${ticker}`);
    }
  };

  return (
    <Row>
      <Col>
        <TextInput
          placeholder="Enter a Company's Ticker Symbol"
          type="text"
          value={todo}
          onKeyDown={handleKeyDown}
          onChange={(e) => setTodo(e.target.value)}
        />
      </Col>
    </Row>
  );
};
