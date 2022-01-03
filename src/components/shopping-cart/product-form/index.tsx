import { Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import shoppingCartClient from '../api';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Form.css';
import InputAdornment from '@mui/material/InputAdornment';
import { ClassNames } from '@emotion/react';

yup.setLocale({
    number: {
        max: 'La cantidad no debe ser mayor a ${max}',
    }
});

const validationSchema = yup.object({
    name: yup.string()
        .required("Requerido")
        .matches(/^[a-zA-Z\s:]{0,150}$/, "Nombre inválido"),
    description: yup.string()
        .required("Requerido")
        .matches(/^[a-zA-Z0-9\s:]{0,250}$/, "Descripción inválida"),
    price: yup.number()
        .required("Requerido")
        .positive(),
    quantity: yup.number()
        .required()
        .positive()
        .max(1)
        .integer(),
}
);

type FormValues = {
    name: string,
    description: string;
    price: number;
    quantity: number;
};

const initialValues: FormValues = {
    name: "",
    description: "",
    price: 0,
    quantity: 0
};

function ProductForm() {
    //const navigate = useNavigate();

    const handleSubmit = async (
        formValues: FormValues,
        helpers: FormikHelpers<FormValues>
    ) => {
        await shoppingCartClient.createProduct(formValues);

        helpers.resetForm({
            values: initialValues,
        });

        //navigate("/");
        window.location.reload();
    };

    return (
        <Formik<FormValues>
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {(formikProps) => {
                return (

                    <div className='form-box'>
                        <form onSubmit={formikProps.handleSubmit}>
                            <div className='form-group'>
                                <TextField
                                    name="name"
                                    label="Nombre"
                                    variant="outlined"
                                    value={formikProps.values.name}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    error={
                                        formikProps.errors.name !== undefined &&
                                        formikProps.touched.name
                                    }
                                    helperText={formikProps.errors.name || ""}
                                />
                            </div>
                            <div className='form-group'>
                                <TextField
                                    name="description"
                                    label="Descripción"
                                    variant="outlined"
                                    value={formikProps.values.description}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    error={
                                        formikProps.errors.description !== undefined &&
                                        formikProps.touched.description
                                    }
                                    helperText={formikProps.errors.description || ""}
                                />
                            </div>
                            <div className='form-group'>
                                <TextField
                                    name="price"
                                    label="Precio"
                                    variant="outlined"
                                    value={formikProps.values.price}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    error={
                                        formikProps.errors.price !== undefined &&
                                        formikProps.touched.price
                                    }
                                    helperText={formikProps.errors.price || ""}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                    }}
                                />
                            </div>
                            <div className='form-group'>
                                <TextField
                                    name="quantity"
                                    label="Cantidad"
                                    variant="outlined"
                                    value={formikProps.values.quantity}
                                    onChange={formikProps.handleChange}
                                    onBlur={formikProps.handleBlur}
                                    error={
                                        formikProps.errors.quantity !== undefined &&
                                        formikProps.touched.quantity
                                    }
                                    helperText={formikProps.errors.quantity || ""}
                                />
                            </div>
                            <div className='form-button'>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={!formikProps.isValid || !formikProps.dirty}
                                >
                                    Guardar
                                </Button>
                            </div>
                        </form>
                    </div>
                );
            }}
        </Formik>
    );
}

export default ProductForm;