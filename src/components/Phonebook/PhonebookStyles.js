import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import photo from 'image/contact.jpg';

console.log(photo);

const StyleList = {
  SectionContainer: styled.div`
    width: 600px;
    padding: 20px;
    background-color: rgb(230, 154, 92);
    font-size: 24px;
    color: black;
    font-weight: bold;
  `,

  SectionTitle: styled.h2`
    font-size: 32px;
    margin-bottom: 20px;
    color: rgb(150, 50, 50);
  `,

  FormStyle: styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,

  FieldStyles: styled(Field)`
    width: 50%;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: bisque;
    padding: 10px;
  `,

  BtnStyle: styled.button`
    width: 50%;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: brown;
    color: bisque;
    padding: 10px;
  `,

  ErrorMessageStyle: styled.div`
    display: block;
    color: red;
    font-size: 16px;
  `,

  ListOfContactsStyle: styled.ul`
    list-style: url('${photo}');
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    padding-left: 50px;
    font-size: 28px;
    & > li {
      padding-left: 10px;
    }
  `,

  BtnDeleteContact: styled.button`
    display: inline-block;
    margin-right: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 2px solid brown;
    background-color: brown;
    color: bisque;
    padding: 5px;
  `,
};

export default StyleList;
