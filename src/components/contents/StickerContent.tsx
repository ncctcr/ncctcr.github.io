import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 10px;
  height: 100%;
`

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  background: transparent;
  border: none;
  outline: none;
  color: inherit;
  font: inherit;
  font-size: 13px;
`;

const StickerContent = () => {
  const [text, setText] = useState(`ToDo
1. Turn on 'lo fi hip hop radio'
2. Learn about skills. Open 'Skills' in the Dock
3. Check work experience. Open 'Experience' in the Dock
4. Learn about education. Open 'Education' in the Dock
5. Reach out to Nikolay via social networks
  `)

  return (
    <Wrapper>
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
    </Wrapper>
  );
};

export default StickerContent;